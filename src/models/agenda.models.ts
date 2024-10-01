import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Patient, Psychologist } from "./user.models";

@Entity("agendamento_de_consultas")
export class Agenda {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'datetime' })
    date!: Date;

    @ManyToOne(() => Patient, paciente => paciente.id, {
        eager: true
    })
    @JoinColumn({ name: "paciente_id"})
    patient!: Patient;

    @ManyToOne(() => Psychologist, psicologo => psicologo.id, {
        eager: true
    })
    @JoinColumn({ name: "psicologo_id"})
    psychologist!: Psychologist
};
