import { Router } from "express";
import { PsychologistController, PatientController, AdminController } from "../controllers/user.controllers";

const userRoute = Router();
const psychologistController = new PsychologistController();
const patientController = new PatientController();
const adminController = new AdminController();

// User.Psychologists
userRoute.get("/psychologists", psychologistController.list);
userRoute.get("/psychologists/:id", psychologistController.get);
userRoute.post("/psychologists", psychologistController.save);
userRoute.put("/psychologists/:id", psychologistController.update);
userRoute.delete("/psychologists/:id", psychologistController.delete);

// User.Patients
userRoute.get("/patients", patientController.list);
userRoute.get("/patients/:id", patientController.get);
userRoute.post("/patients", patientController.save);
userRoute.put("/patients/:id", patientController.update);
userRoute.delete("/patients/:id", patientController.delete);

// User.admins
userRoute.get("/admins", adminController.list);
userRoute.get("/admins/:id", adminController.get);
userRoute.post("/admins", adminController.save);
userRoute.put("/admins/:id", adminController.update);
userRoute.delete("/admins/:id", adminController.delete);


export default userRoute;
