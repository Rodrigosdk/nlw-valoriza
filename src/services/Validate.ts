import { User } from "../model/User";
import { compare , hash} from "bcrypt"

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

    public async comparePassword(password: string, passwordHash: string, message:string): Promise<boolean | Error>{
       const passwordValidate = await compare(password, passwordHash);
       if (!passwordValidate){
            throw new Error(message)
       }
       return passwordValidate
    }
    
}