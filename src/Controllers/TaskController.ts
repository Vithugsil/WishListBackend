import { Body, Get, Patch, Delete, Post, Route } from "tsoa";
import { TaskModel } from "../Models/TaskModel";
import { JsonObject } from "swagger-ui-express";

@Route("api/task")
export default class TaskController {

    @Post("/create")
    public async create(
        @Body() body: { status: string, description: string }
    ): Promise<string> {

        const data = new TaskModel({
            status: body.status,
            description: body.description
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
    public async update(@Body() body: { id: string; status: string, description: string }): Promise<JsonObject> {
        try {
            const result = await TaskModel.findByIdAndUpdate(body.id, { status: body.status, description: body.description })

            return { result: result }
        } catch (error: any) {
            return {
                error: error.message,
            }
        }
    }

    @Delete("/delete/:id")
    public async delete(@Body() body: { id : string}): Promise<JsonObject> {
        try {
            const data = await TaskModel.findByIdAndDelete(body.id)
            return { data: data }
        } catch (error: any) {
            return {
                error: error.message,
            }
        }
    }
}