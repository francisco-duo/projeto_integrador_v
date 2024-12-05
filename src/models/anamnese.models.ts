import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Psychologist } from "./user.models";
import { Patient } from "./user.models";


@Entity("anamnese_adulto")
export class AnamneseAdulto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'date' })
    date!: Date;

    // Relação ManyToOne com o modelo de Paciente
    @ManyToOne(() => Patient, patient => patient.id, { eager: true })
    @JoinColumn({ name: "patient_id" })
    patient!: Patient;

    // Relação ManyToOne com o modelo de Psicologo
    @ManyToOne(() => Psychologist, psicologo => psicologo.id, { eager: true })
    @JoinColumn({ name: 'psicologo_id' })
    psychologist!: Psychologist;
}
