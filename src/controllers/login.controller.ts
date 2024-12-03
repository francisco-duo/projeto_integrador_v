import { Response, Request, NextFunction } from "express";

import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { PatientsService, AdminService, PsychologistService } from "../services/user.service";
import { Patient } from "../models/user.models";

export class LoginController {
    async login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        
        try {
            const userPatient = await Patient.findOneBy({ email });
            if (!userPatient) return res.status(404).json({ error: "User not found" });

            const isPasswordValid = await bcrypt.compare(password, userPatient.password);
            
            if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });

            const token = jwt.sign({ id: userPatient.id, role: userPatient.role }, "your_secret_key", {
                expiresIn: "1d",
            });

            const role = userPatient.role;

            res.json({ token, role });
        } catch (error) {
            res.status(500).json({ error: "Login failed", details: error });
        }
    };
};