import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/user.models";


const AppDataSource = new DataSource({
    type: "sqlite",
    // host: "localhost",
    // port: 5432,
    // username: "test",
    // password: "test",
    database: "db.sqlite3",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

export default AppDataSource;