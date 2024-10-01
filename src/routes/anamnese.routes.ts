import { Router } from "express";
import { AnamneseAdultoController } from "../controllers/anamnese.controllers";

const anamneseRoute = Router();
const anamneseController = new AnamneseAdultoController();

// Anamnese Routes
anamneseRoute.get("/anamneses", anamneseController.list);
anamneseRoute.get("/anamneses/:id", anamneseController.get);
anamneseRoute.post("/anamneses", anamneseController.save);
anamneseRoute.put("/anamneses/:id", anamneseController.update);
anamneseRoute.delete("/anamneses/:id", anamneseController.delete);

export default anamneseRoute;