import { User } from "../model/User";

export class Validate{
    public email(email:string, message: string){
        if (!email) {
            throw new Error(message)
        }    
    }

    public userExiste(userAlreadyExists: User, message:string){
        if (userAlreadyExists) {
            throw new Error(message)
        }
    }
}