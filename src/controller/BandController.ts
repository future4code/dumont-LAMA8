import { Request, Response} from "express";
import { BandInputDTO } from "../business/entities/band";

export class BandController{
    async registerBand (req: Request, res: Response){
        const input: BandInputDTO = {
            name: req.body.name,
            mainGenre: req.body.mainGenre,
            responsible: req.body.responsible
        }
        const bandBusiness = ""
    }
}