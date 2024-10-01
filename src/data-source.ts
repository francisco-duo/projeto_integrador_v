import "reflect-metadata";
import { DataSource } from "typeorm";
import { User, Psychologist, Patient, Admin } from "./models/user.models";
import { AnamneseAdulto } from "./models/anamnese.models";
import { Agenda } from "./models/agenda.models";

const AppDataSource = new DataSource({
    type: "sqlite",
    // host: "localhost",
    // port: 5432,
    // username: "test",
    // password: "test",
    database: "db.sqlite3",
    synchronize: true,
    logging: true,
    entities: [User, Psychologist, Patient, Admin, AnamneseAdulto, Agenda],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;