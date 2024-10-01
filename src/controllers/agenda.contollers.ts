import { Response, Request, NextFunction } from "express";

import { AgendaService } from "../services/agenda.service";

export class AgendaController {
    async save(req: Request, res: Response, next: NextFunction) {
        const agendaData = req.body;

        try {
            const agendaService = new AgendaService();
            await agendaService.post(agendaData);
            return res.status(200).send(`Appointment has been created`);
        } catch (err) {
            next(err);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const agendaService = new AgendaService();
            const agendas = await agendaService.getList();
            return res.status(200).json(agendas);
        } catch (err) {
            next(err);
        }
    }

    async get(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const agendaService = new AgendaService();
            const agenda = await agendaService.get(Number(id));
            return res.status(200).json(agenda);
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const agendaData = req.body;

        try {
            const agendaService = new AgendaService();
            const updatedAgenda = await agendaService.put(Number(id), agendaData);
            return res.status(200).json(updatedAgenda);
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const agendaService = new AgendaService();
            await agendaService.delete(Number(id));
            return res.status(200).send(`Appointment with ID ${id} has been deleted`);
        } catch (err) {
            next(err);
        }
    }
}