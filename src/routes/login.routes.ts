import { Router } from "express";
import { LoginController } from "../controllers/login.controller";


const loginRoute = Router();
const loginController = new LoginController();

// Routes
loginRoute.post("/login", loginController.login);

export default loginRoute;
