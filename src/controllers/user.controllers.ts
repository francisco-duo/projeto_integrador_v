import { Response, Request, NextFunction } from "express";

import CreateUserService, { ListUserService } from "../services/user.service";

class UserController {
    async save (req: Request, res: Response, next: NextFunction) {
        const { username, email } = req.body;

        try {
            const createUserService = new CreateUserService();
            await createUserService.excute({ username, email });

            return res.status(200).send(`User ${username} has been created`);
        } catch (err) {
            next(err);
        }
    }

    async list (req: Request, res: Response, next: NextFunction) {
        try {
            const listUserService = new ListUserService();

            return res.status(200).send(listUserService.excute());
        } catch (err) {
            next(err);
        }
    }
}

export default { UserController };
