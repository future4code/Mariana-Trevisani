import { UserData } from "../data/UserData";
import { MissingFieldsToComplet } from "../error/MissingFieldsToComplet";
import { UserInputDTO, UserInsertDTO } from "../model/User";
import IdGenerator from "../services/IdGenerator";

export class UserBusinees {

    async user(input: UserInputDTO) {

        
        const userData = new UserData()
        const result = await userData.insertUser(user)

        return result
    }
}