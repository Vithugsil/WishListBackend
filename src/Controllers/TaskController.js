"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsoa_1 = require("tsoa");
const TaskModel_1 = require("../Models/TaskModel");
let TaskController = class TaskController {
    async create(body) {
        const data = new TaskModel_1.TaskModel({
            status: body.status,
            description: body.description
        });
        try {
            await data.save();
            return "OK";
        }
        catch (error) {
            return JSON.stringify(error);
        }
    }
    async all() {
        try {
            const data = await TaskModel_1.TaskModel.find();
            return data;
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async update(body) {
        try {
            const result = await TaskModel_1.TaskModel.findByIdAndUpdate(body.id, { status: body.status, description: body.description });
            return { result: result };
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async delete(body) {
        try {
            const data = await TaskModel_1.TaskModel.findByIdAndDelete(body.id);
            return { data: data };
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
};
__decorate([
    (0, tsoa_1.Post)("/create"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Get)("/getAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "all", null);
__decorate([
    (0, tsoa_1.Patch)("/update"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Delete)("/delete/:id"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
TaskController = __decorate([
    (0, tsoa_1.Route)("api/task")
], TaskController);
exports.default = TaskController;
