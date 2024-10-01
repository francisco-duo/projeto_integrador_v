import { Router } from "express";

import { AgendaController } from "../controllers/agenda.contollers";

const agendaRoute = Router();
const agendaController = new AgendaController();

// Agenda Routes
agendaRoute.get("/agendas", agendaController.list);
agendaRoute.get("/agendas/:id", agendaController.get);
agendaRoute.post("/agendas", agendaController.save);
agendaRoute.put("/agendas/:id", agendaController.update);
agendaRoute.delete("/agendas/:id", agendaController.delete);

export default agendaRoute;