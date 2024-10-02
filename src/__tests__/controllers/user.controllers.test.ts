import request from "supertest";
import express, { response } from "express";

import { PsychologistController } from "../../controllers/user.controllers";
import { PsychologistService } from "../../services/user.service";

jest.mock("../../services/user.service");
const mockPsychologistService = PsychologistService as jest.Mocked<typeof PsychologistService>;

const app = express();
app.use(express.json());

const psychologistController = new PsychologistController();

app.post('/psychologists', (req, res, next) => psychologistController.save(req, res, next));
app.get('/psychologists', (req, res, next) => psychologistController.list(req, res, next));

describe("PsychologistController", () => {
    it("Criando um novo usuario psicologo", async () => {
        // mockPsychologistService.prototype.post.

        const response = await request(app)
            .post("/psychologists")
            .send({
                name: "Francisco",
                email: "francisco@gmail.com",
                phoneNumber: "5561985829628",
                role: "psychologist",
                crpNumber: "000000000",
                specialty: "psicopedagogia"
            });
        
            expect(response.status).toBe(200);
    });

    it("Listando usuários do tipo psychologist", async () => {
        const response = await request(app)
            .get("/psychologists")
        
        expect(response.status).toBe(200);
    });

});