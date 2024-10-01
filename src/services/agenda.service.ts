import AppDataSource from "../data-source";
import { Agenda } from "../models/agenda.models";

export class AgendaService {
    async post(agendaData: Partial<Agenda>) {
        const agendaRepository = AppDataSource.getRepository(Agenda);
        const agenda = agendaRepository.create(agendaData);
        await agendaRepository.save(agenda);
    };

    async get(id: number) {
        const agendaRepository = AppDataSource.getRepository(Agenda);
        const agenda = await agendaRepository.findOne({ where: { id } });

        if (!agenda) {
            throw new Error(`Agenda with ID ${id} not found`);
        }

        return agenda;
    };

    async getList() {
        const agendaRepository = AppDataSource.getRepository(Agenda);
        const agendas = await agendaRepository.find();
        return agendas;
    };

    async put(id: number, agendaData: Partial<Agenda>) {
        const agendaRepository = AppDataSource.getRepository(Agenda);
        const agenda = await agendaRepository.findOne({ where: { id } });

        if (!agenda) {
            throw new Error(`Agenda with ID ${id} not found`);
        }

        Object.assign(agenda, agendaData);
        await agendaRepository.save(agenda);
        return agenda;
    };

    async delete(id: number) {
        const agendaRepository = AppDataSource.getRepository(Agenda);
        const agenda = await agendaRepository.findOne({ where: { id } });

        if (!agenda) {
            throw new Error(`Agenda with ID ${id} not found`);
        }

        await agendaRepository.remove(agenda);
    };
}