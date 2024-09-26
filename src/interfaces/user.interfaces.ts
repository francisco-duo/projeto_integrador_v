import { UserRole } from "../models/user.models"

export interface PatientInterface {
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    role: UserRole,
    medicalHistory: string,
    treatmentPlan: string,
    dateOfBirth: Date
}

export interface PsychologistInterface {
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    role: UserRole,
    crpNumber: string,
    specialty: string
}

export interface AdminInterface{
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    role: UserRole,
}
