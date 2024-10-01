import { Patient, Psychologist } from "../models/user.models";

export interface Agenda {
    date: Date;
    patient: Patient;
    psychologist: Psychologist;
};