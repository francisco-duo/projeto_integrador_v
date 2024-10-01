import { Psychologist } from "../models/user.models";

export interface AnamneseAdulto {
    description: string,
    date: Date,
    psychologist: Psychologist
};
