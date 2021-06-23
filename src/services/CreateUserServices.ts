import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repository/UsersRepository";

interface IUserRequest {
    name: string;
    email: string;
    password: string
    admin?: boolean;
}

class CreateUserServices {
    async execute({ name, email, admin , password}: IUserRequest) {
        const repository = getCustomRepository(UsersRepository)

        if (!email) {
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await repository.findOne({ email })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const user = repository.create({ name, email, admin, password})
        await repository.save(user)

        return user
    }
}

export { CreateUserServices }