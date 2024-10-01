import { Response, Request, NextFunction } from "express";

import { AnamneseAdultoService } from "../services/anamnese.service";

export class AnamneseAdultoController {
    async save(req: Request, res: Response, next: NextFunction) {
        const anamneseData = req.body;

        try {
            const anamneseService = new AnamneseAdultoService();
            await anamneseService.post(anamneseData);
            return res.status(200).send(`Anamnese has been created`);
        } catch (err) {
            next(err);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const anamneseService = new AnamneseAdultoService();
            const anamneses = await anamneseService.getList();
            return res.status(200).json(anamneses);
        } catch (err) {
            next(err);
        }
    }

    async get(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const anamneseService = new AnamneseAdultoService();
            const anamnese = await anamneseService.get(Number(id));
            return res.status(200).json(anamnese);
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const anamneseData = req.body;

        try {
            const anamneseService = new AnamneseAdultoService();
            const updatedAnamnese = await anamneseService.put(Number(id), anamneseData);
            return res.status(200).json(updatedAnamnese);
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const anamneseService = new AnamneseAdultoService();
            await anamneseService.delete(Number(id));
            return res.status(200).send(`Anamnese with ID ${id} has been deleted`);
        } catch (err) {
            next(err);
        }
    }
}
