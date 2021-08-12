import { User } from "../model/User";

export class Validate{
    public email(email:string){
        if (!email) {
            throw new Error("Email incorrect")
        }    
    }

    public userExiste(userAlreadyExists: User){
        if (userAlreadyExists) {
            throw new Error("User already exists")
        }
    }
}