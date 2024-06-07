import express, { Request, Response } from "express";
import TaskController from "../Controllers/TaskController";

const router = express.Router();
const controller = new TaskController()

router.post("/create", async (req: Request, res: Response) => {
    const response = await controller.create(req.body)
    return res.status(response === "OK" ? 200 : 400).send(response)
})

router.get("/getAll", async (req: Request, res: Response) => {
    const response = await controller.all()
    return res.status(response.error ? 400 : 200).send(response)
})

router.patch("/update", async (req: Request, res: Response) => {
    const response = await controller.update(req.body)
    return res.status(response.error ? 400 : 200).send(response)
})

router.delete("/delete/:id", async (req: Request, res: Response) => {
    const response = await controller.delete(req.body)
    return res.status(response.error ? 400 : 200).send(response)
})

export default router;