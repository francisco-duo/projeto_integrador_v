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

    @Column({ nullable: true })
    dateOfBirth!: Date;

    // Definindo o papel do usuário
    @Column({
        type: "text",
        default: UserRole.PATIENT
    })

    role!: UserRole;

    // Getter to format bith date
    get formattedBirthDate(): string {
        const day = String(this.dateOfBirth.getDate()).padStart(2, "0");
        const month = String(this.dateOfBirth.getMonth() + 1).padStart(2, "0");
        const year = this.dateOfBirth.getUTCFullYear();

        return `${day}/${month}/${year}`
    }
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
}

@Entity()
export class Admin extends User {
    // O modelo de Admin pode não precisar de campos adicionais por enquanto,
    // mas pode ser expandido com responsabilidades específicas de gerenciamento.
}