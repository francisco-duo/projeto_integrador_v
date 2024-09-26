import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";


//Papéis dos usuários
export enum UserRole {
    ADMIN = "admin",
    PSYCHOLOGIST = "psychologist",
    PATIENT = "patient"
}

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    phoneNumber!: string;

    // Definindo o papel do usuário
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.PATIENT
    })
    role!: UserRole;
}

@Entity()
export class Psychologist extends User {
    @Column()
    crpNumber!: string; // Número de registro no Conselho Regional de Psicologia (CRP)

    @Column()
    specialty!: string;
}

@Entity()
export class Patient extends User {
    /*
        Os campos medicalHistory e treatmentPlan devem ser apenas o caminho que leva
    para o arquivo em um bucket.
    */
    @Column({ type: 'text', nullable: true })
    medicalHistory!: string; // Histórico médico relevante

    @Column({ type: 'text', nullable: true })
    treatmentPlan!: string; // Plano de tratamento atual

    @Column({ nullable: true })
    dateOfBirth!: Date;
}

@Entity()
export class Admin extends User {
    // O modelo de Admin pode não precisar de campos adicionais por enquanto,
    // mas pode ser expandido com responsabilidades específicas de gerenciamento.
}