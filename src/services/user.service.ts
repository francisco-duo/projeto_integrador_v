
import AppDataSource from "../data-source";

import { Admin, Patient, Psychologist, User } from "../models/user.models";
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
    async post(psychologistData: PsychologistInterface) {
        const psychologistRepository = AppDataSource.getRepository(Psychologist);
        // hashing password
        const hashedPassword = await bcrypt.hash(psychologistData.password, 10);

        // spread operator criando psicólogo
        const psychologist = psychologistRepository.create({
            ...psychologistData,
            password: hashedPassword,
        });

        await psychologistRepository.save(psychologist);
    };

    async get(id: number) {
        const psychologistRepository = AppDataSource.getRepository(Psychologist);
        const psychologist = await psychologistRepository.findOne({
            where: { id },
            select: ["id", "name", "email", "phoneNumber", "role", "crpNumber", "specialty"]
        });

        if (!psychologist) {
            throw new Error(`Psychologist with ID ${id} not found`);
        }

        return psychologist;
    };

    async getList() {
        const psychologistRepository = AppDataSource.getRepository(Psychologist);
        const psychologists = await psychologistRepository.find({
            select: ["id", "name", "email", "phoneNumber", "role", "crpNumber", "specialty"]
        });

        return psychologists;
    };

    async put(id: number, psychologistData: Partial<PsychologistInterface>) {
        const psychologistRepository = AppDataSource.getRepository(Psychologist);

        const psychologist = await psychologistRepository.findOne({ where: { id } });
        
        if (!psychologist) {
            throw new Error(`Psychologist with ID ${id} not found`);
        }

        // Atualiza os campos, exceto o password (a menos que seja explicitamente passado)
        Object.assign(psychologist, psychologistData);

        if (psychologistData.password) {
            psychologist.password = await bcrypt.hash(psychologistData.password, 10); // Criptografa a nova senha, se passada
        }

        await psychologistRepository.save(psychologist);

        return psychologist;
    };

    async delete(id: number) {
        const psychologistRepository = AppDataSource.getRepository(Psychologist);

        const psychologist = await psychologistRepository.findOne({ where: { id } });

        if (!psychologist) {
            throw new Error(`Psychologist with ID ${id} not found`);
        }

        await psychologistRepository.remove(psychologist);
        console.log(`Psychologist with ID ${id} has been deleted`);
    };
}


export class AdminService {
    async post(adminData: AdminInterface) {
        const adminRepository = AppDataSource.getRepository(Admin);
        // hashing password
        const hashedPassword = await bcrypt.hash(adminData.password, 10);

        // spread operator criando admin
        const admin = adminRepository.create({
            ...adminData,
            password: hashedPassword,
        });

        await adminRepository.save(admin);
    };

    async get(id: number) {
        const adminRepository = AppDataSource.getRepository(Admin);
        const admin = await adminRepository.findOne({
            where: { id },
            select: ["id", "name", "email", "phoneNumber", "role"]
        });

        if (!admin) {
            throw new Error(`Admin with ID ${id} not found`);
        }

        return admin;
    };

    async getList() {
        const adminRepository = AppDataSource.getRepository(Admin);
        const admins = await adminRepository.find({
            select: ["id", "name", "email", "phoneNumber", "role"]
        });

        return admins;
    };

    async put(id: number, adminData: Partial<AdminInterface>) {
        const adminRepository = AppDataSource.getRepository(Admin);

        const admin = await adminRepository.findOne({ where: { id } });
        
        if (!admin) {
            throw new Error(`Admin with ID ${id} not found`);
        }

        // Atualiza os campos, exceto o password (a menos que seja explicitamente passado)
        Object.assign(admin, adminData);

        if (adminData.password) {
            admin.password = await bcrypt.hash(adminData.password, 10); // Criptografa a nova senha, se passada
        }

        await adminRepository.save(admin);

        return admin;
    };

    async delete(id: number) {
        const adminRepository = AppDataSource.getRepository(Admin);

        const admin = await adminRepository.findOne({ where: { id } });

        if (!admin) {
            throw new Error(`Admin with ID ${id} not found`);
        }

        await adminRepository.remove(admin);
        console.log(`Admin with ID ${id} has been deleted`);
    };
}
