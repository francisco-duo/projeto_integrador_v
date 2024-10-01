import { Response, Request, NextFunction } from "express";

import { AdminService, PatientsService, PsychologistService } from "../services/user.service";

export class PatientController {
    async save(req: Request, res: Response, next: NextFunction) {
        const { name, email, password, phoneNumber, role, medicalHistory, treatmentPlan, dateOfBirth } = req.body;

        try {
            const patientsService = new PatientsService();
            await patientsService.post({ name, email, password, phoneNumber, role, medicalHistory, treatmentPlan, dateOfBirth });

            return res.status(200).send(`Patient ${name} has been created`);
        } catch (err) {
            next(err);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const patientsService = new PatientsService();
            const patients = await patientsService.getList();

            return res.status(200).json(patients);
        } catch (err) {
            next(err);
        }
    }

    async get(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const patientsService = new PatientsService();
            const patient = await patientsService.get(Number(id));

            return res.status(200).json(patient);
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const patientData = req.body;

        try {
            const patientsService = new PatientsService();
            const updatedPatient = await patientsService.put(Number(id), patientData);

            return res.status(200).json(updatedPatient);
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const patientsService = new PatientsService();
            await patientsService.delete(Number(id));

            return res.status(200).send(`Patient with ID ${id} has been deleted`);
        } catch (err) {
            next(err);
        }
    }
}

export class PsychologistController {
    async save(req: Request, res: Response, next: NextFunction) {
        const { name, email, phoneNumber, password, role, crpNumber, specialty } = req.body;

        try {
            const psychologistService = new PsychologistService();
            await psychologistService.post({ name, email, phoneNumber, password, role, crpNumber, specialty });

            return res.status(200).send(`Psychologist ${name} has been created`);
        } catch (err) {
            next(err);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const psychologistService = new PsychologistService();
            const psychologists = await psychologistService.getList();

            return res.status(200).json(psychologists);
        } catch (err) {
            next(err);
        }
    }

    async get(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const psychologistService = new PsychologistService();
            const psychologist = await psychologistService.get(Number(id));

            return res.status(200).json(psychologist);
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const psychologistData = req.body;

        try {
            const psychologistService = new PsychologistService();
            const updatedPsychologist = await psychologistService.put(Number(id), psychologistData);

            return res.status(200).json(updatedPsychologist);
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const psychologistService = new PsychologistService();
            await psychologistService.delete(Number(id));

            return res.status(200).send(`Psychologist with ID ${id} has been deleted`);
        } catch (err) {
            next(err);
        }
    }
}

export class AdminController {
    async save(req: Request, res: Response, next: NextFunction) {
        const { name, email, password, phoneNumber, role } = req.body;

        try {
            const adminService = new AdminService();
            await adminService.post({ name, email, password, phoneNumber, role });

            return res.status(200).send(`Admin ${name} has been created`);
        } catch (err) {
            next(err);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const adminService = new AdminService();
            const admins = await adminService.getList();

            return res.status(200).json(admins);
        } catch (err) {
            next(err);
        }
    }

    async get(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const adminService = new AdminService();
            const admin = await adminService.get(Number(id));

            return res.status(200).json(admin);
        } catch (err) {
            next(err);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        const adminData = req.body;

        try {
            const adminService = new AdminService();
            const updatedAdmin = await adminService.put(Number(id), adminData);

            return res.status(200).json(updatedAdmin);
        } catch (err) {
            next(err);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        try {
            const adminService = new AdminService();
            await adminService.delete(Number(id));

            return res.status(200).send(`Admin with ID ${id} has been deleted`);
        } catch (err) {
            next(err);
        }
    }
}
