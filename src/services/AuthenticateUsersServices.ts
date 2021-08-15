import { getCustomRepository } from "typeorm";
import { sign } from 'jsonwebtoken'
import { UsersRepository } from "../repository/UsersRepository";
import { Validate } from './Validate'


interface AuthenticateUsers {
    email: string;
    password: string;
}

export class AuthenticateUsersServices extends Validate {
    async execute({ email, password }: AuthenticateUsers) {
        const repository = getCustomRepository(UsersRepository)

        const user = await repository.findOne({ email })
        this.userExiste(user, "email or password incorrect")

        await this.comparePassword(password, user.password, "email or password incorrect")

        const token = sign({ email: user.email }, 'a2e63ee01401aaeca78be023dfbb8c59', {
            subject: user.id,
            expiresIn: '1d'
        })

        return token
    }
}