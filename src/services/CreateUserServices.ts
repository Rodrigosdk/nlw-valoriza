import { UsersRepository } from "../repository/UsersRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserServices {
    async execute({ name, email, admin }: IUserRequest) {
        const repository = new UsersRepository()

        if (!email) {
            throw new Error("Email incorrect")
        }
        const userAlreadyExists = await repository.findOne({ email })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }
    }
}

export {CreateUserServices}