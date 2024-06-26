import { Body, Get, Patch, Delete, Post, Route, Put } from "tsoa";
import { TaskModel } from "../Models/TaskModel";
import { JsonObject } from "swagger-ui-express";

@Route("api/task")
export default class TaskController {

    @Post("/create")
    public async create(
        @Body() body: { id: string, status: boolean , description: string, createdAt: Date, updatedAt: Date}
    ): Promise<JsonObject> {

        const data = new TaskModel({
            id: body.id,
            status: body.status || true,
            description: body.description,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })
        return data;
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

    @Put("/update/:id")
    public async update(id: string, @Body() body: {status: boolean, description: string}): Promise<JsonObject> {
        try {
            const result = await TaskModel.findByIdAndUpdate(id, { status: body.status == false ? true : false, description: body.description, updatedAt: Date.now()})
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