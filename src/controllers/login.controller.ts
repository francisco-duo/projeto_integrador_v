import { Response, Request, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { PatientsService, AdminService, PsychologistService } from "../services/user.service";
import { Patient, Admin, Psychologist } from "../models/user.models";

export class LoginController {
    async login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        try {
            let user: any = null;
            let role: string = "";

            // Procurar o usuário em cada tipo de serviço
            user = await Patient.findOneBy({ email });
            if (user) role = "Patient";

            if (!user) {
                user = await Admin.findOneBy({ email });
                if (user) role = "Admin";
            }

            if (!user) {
                user = await Psychologist.findOneBy({ email });
                if (user) role = "Psychologist";
            }

            // Se nenhum usuário foi encontrado
            if (!user) return res.status(404).json({ error: "User not found" });

            // Comparar a senha informada com a armazenada
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });

            // Gerar token JWT com id e role
            const token = jwt.sign({ id: user.id, role }, "your_secret_key", {
                expiresIn: "1d",
            });

            res.json({ token, role });
        } catch (error) {
            res.status(500).json({ error: "Login failed", details: error });
        }
    }
}
