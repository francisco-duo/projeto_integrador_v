import { Router } from "express";
import userControllers from "../controllers/user.controllers";

const userRoute = Router();
const userController = new userControllers.UserController();

// POST
// User.Psychologists
userRoute.get("/psychologists", userController.list);
userRoute.get("/psychologists/:id", userController.list);
userRoute.post("/psychologists", userController.save);
userRoute.put("/psychologists/:id", userController.save);
userRoute.put("/psychologists/:id", userController.save);

// User.Patients
userRoute.get("/patients", userController.list);
userRoute.get("/patients/:id", userController.list);
userRoute.post("/patients", userController.save);
userRoute.put("/patients/:id", userController.save);
userRoute.put("/patients/:id", userController.save);

// User.admins
userRoute.get("/admins", userController.list);
userRoute.get("/admins/:id", userController.list);
userRoute.post("/admins", userController.save);
userRoute.put("/admins/:id", userController.save);
userRoute.put("/admins/:id", userController.save);


export default userRoute;
