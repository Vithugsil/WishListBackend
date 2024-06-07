import { Body, Post, Route } from "tsoa"
import { DrinkModel } from "../Models/DrinkModel"
import { JsonObject } from "swagger-ui-express"

@Route("api/drink")
export default class DrinkController {
  @Post("/create")
  public async create(@Body() body: { name: string, size: number }): Promise<JsonObject> {
    const data = new DrinkModel({
      name: body.name,
      size: body.size
    })

    try {
      return data.save()
    } catch (error) {
      return { error }
    }
  }
}