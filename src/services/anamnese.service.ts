import AppDataSource from "../data-source";
import { AnamneseAdulto } from "../models/anamnese.models";

export class AnamneseAdultoService {
    async post(anamneseData: Partial<AnamneseAdulto>) {
        const anamneseRepository = AppDataSource.getRepository(AnamneseAdulto);
        const anamnese = anamneseRepository.create(anamneseData);
        await anamneseRepository.save(anamnese);
    };

    async get(id: number) {
        const anamneseRepository = AppDataSource.getRepository(AnamneseAdulto);
        const anamnese = await anamneseRepository.findOne({ where: { id } });

        if (!anamnese) {
            throw new Error(`Anamnese with ID ${id} not found`);
        }

        return anamnese;
    };

    async getList() {
        const anamneseRepository = AppDataSource.getRepository(AnamneseAdulto);
        const anamneses = await anamneseRepository.find();
        return anamneses;
    };

    async put(id: number, anamneseData: Partial<AnamneseAdulto>) {
        const anamneseRepository = AppDataSource.getRepository(AnamneseAdulto);
        const anamnese = await anamneseRepository.findOne({ where: { id } });

        if (!anamnese) {
            throw new Error(`Anamnese with ID ${id} not found`);
        }

        Object.assign(anamnese, anamneseData);
        await anamneseRepository.save(anamnese);
        return anamnese;
    };

    async delete(id: number) {
        const anamneseRepository = AppDataSource.getRepository(AnamneseAdulto);
        const anamnese = await anamneseRepository.findOne({ where: { id } });

        if (!anamnese) {
            throw new Error(`Anamnese with ID ${id} not found`);
        }

        await anamneseRepository.remove(anamnese);
    };
}