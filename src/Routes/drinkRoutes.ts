import express, { Request, Response } from "express"
import DrinkController from "../Controllers/DrinkController"

const router = express.Router()
const controller = new DrinkController()

router.post("/create", async (req: Request, res: Response) => {
  const response = await controller.create(req.body)

  return res.status(200).send(response)
})

export default router