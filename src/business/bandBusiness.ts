import { BandDatabase } from "../data/BandDataBase";
import { BandInputDTO } from "./entities/band";
import { UserRole } from "./entities/User";
import { InvalidInputError } from "./error/invalidInputError";
import { UnauthorizedError } from "./error/UnauthorizedError";
import { Authenticator } from "./services/Authenticator";
import { IdGenerator } from "./services/IdGenerator";

export class BandBusiness {
    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async registerBand(input: BandInputDTO, token: string){
        const tokenData = this.authenticator.getData(token)

        if (tokenData.role !== UserRole.ADMIN){
            throw new UnauthorizedError("Only admins can access this feature");
        }

        if(!input.name || !input.mainGenre || !input.responsible) {
            throw new InvalidInputError("Invalid input to registerBand");
            
        }
    }
}