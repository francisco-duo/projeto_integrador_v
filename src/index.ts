import express from "express";
import userRoute from "./routes/user.routes";

import AppDataSource from "./data-source";

// init datasource
AppDataSource.initialize()
    .then(() => {
        console.log("Data source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data source initialization:", err);
    });

const app = express();

app.use(express.json());

// Routes
app.use(userRoute);

// Run server
app.listen(3000, () => {
    console.log("[server] Is running on port 3000...")
});