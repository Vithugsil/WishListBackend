import { Body, Get, Patch, Delete, Post, Route } from "tsoa";
import { TaskModel } from "../Models/TaskModel";
import { JsonObject } from "swagger-ui-express";

@Route("api/task")
export default class TaskController {

    @Post("/create")
    public async create(
        @Body() body: { status: boolean , description: string, createdAt: Date, updatedAt: Date}
    ): Promise<string> {

        const data = new TaskModel({
            status: body.status || true,
            description: body.description,
            createdAt: body.createdAt || Date.now(),
            updatedAt: body.updatedAt || Date.now()
        })
        try {
            await data.save()
            return "OK"
        } catch (error) {
            return JSON.stringify(error);
        }
    }

    @Get("/getAll")
    public async all(): Promise<JsonObject> {
        try {
            const data = await TaskModel.find()
            return data
        } catch (error: any) {
            return {
                error: error.message,
            }
        }
    }


    @Patch("/update")
    public async update(@Body() body: { id: string; status: boolean, description: string , updatedAt: Date}): Promise<JsonObject> {
        try {
            const result = await TaskModel.findByIdAndUpdate(body.id, { status: body.status == false ? true : true, description: body.description, updatedAt: Date.now()})
            return { result: result }
        } catch (error: any) {
            return {
                error: error.message,
            }
        }
    }

    @Delete("/delete/:id")
    public async delete(id: string): Promise<JsonObject> {
        try {
            const data = await TaskModel.findByIdAndDelete(id)
            return { data: data }
        } catch (error: any) {
            return {
                error: error.message,
            }
        }
    }
}