
import AppDataSource from "../data-source";

import { Patient, User } from "../models/user.models";
import { AdminInterface, PatientInterface, PsychologistInterface } from "../interfaces/user.interfaces";

import * as bcrypt from "bcryptjs";

// Responsável por executar as operações de banco de dados
export class PatientsService {
    async post(patientData: PatientInterface) {
        const patientRepository = AppDataSource.getRepository(Patient);
        // hashing password
        const hashedPassword = await bcrypt.hash(patientData.password, 10);

        // spread operator criando paciente
        const patient = patientRepository.create({
            ...patientData,
            password: hashedPassword,
        });

        await patientRepository.save(patient);
    };

    async get(id: number) {
        const patientRepository = AppDataSource.getRepository(Patient);
        const patient = await patientRepository.findOne({
            where: { id },
            select: ["id", "name", "email", "phoneNumber", "role", "medicalHistory", "dateOfBirth"]
        });

        if (!patient) {
            throw new Error(`Patient with ID ${id} not found`);
        }

        return patient;
    };

    async getList() {
        const patientRepository = AppDataSource.getRepository(Patient);
        const patients = await patientRepository.find({
            select:["id", "name", "email", "phoneNumber", "role", "medicalHistory", "dateOfBirth"]
        });

        return patients;
    };

    async put(id: number, patientData: Partial<PatientInterface>) {
        const patientRepository = AppDataSource.getRepository(Patient);

        const patient = await patientRepository.findOne({ where: { id } });
        
        if (!patient) {
            throw new Error(`Patient with ID ${id} not found`);
        }

        // Atualiza os campos, exceto o password (a menos que seja explicitamente passado)
        Object.assign(patient, patientData);

        if (patientData.password) {
            patient.password = await bcrypt.hash(patientData.password, 10); // Criptografa a nova senha, se passada
        }

        await patientRepository.save(patient);

        return patient;
    };

    async delete(id: number) {
        const patientRepository = AppDataSource.getRepository(Patient);

        const patient = await patientRepository.findOne({ where: { id } });

        if (!patient) {
            throw new Error(`Patient with ID ${id} not found`);
        }

        await patientRepository.remove(patient);
        console.log(`Patient with ID ${id} has been deleted`);
    };
}


export class PsychologistService {
    async get(id: number) {};

    async getList() {};

    async post(psychologistData: PsychologistInterface) {};

    async put(id: number, psychologistData: Partial<PsychologistInterface>) {};

    async delete(id: number) {};
}