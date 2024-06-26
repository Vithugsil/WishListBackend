import { Body, Get, Patch, Delete, Post, Route, Put } from "tsoa";
import { TaskModel } from "../Models/TaskModel";
import { JsonObject } from "swagger-ui-express";
import { randomUUID } from "crypto";

@Route("api/task")
export default class TaskController {

    @Post("/create")
    public async create(
        @Body() body: { _id: string, status: boolean, description: string, createdAt: Date, updatedAt: Date }
    ): Promise<string> {


        const data = new TaskModel({
            _id: body._id,
            status: body.status || false,
            description: body.description,
            createdAt: body.createdAt || Date.now(),
            updatedAt: body.updatedAt || Date.now()
        })
        try {
            await data.save()
            return JSON.stringify({ message: "ok" });
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

    @Put("/update/:id")
    public async update(id: string, @Body() body: { status: boolean, description: string }): Promise<JsonObject> {
        try {
            const result = await TaskModel.findByIdAndUpdate(id, { status: body.status == false ? true : false, description: body.description, updatedAt: Date.now() })
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