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
            id: body.id,
            status: body.status || true,
            description: body.description,
            createdAt: Date.now(),
            updatedAt: Date.now()
        });
        return data;
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
    async update(id, body) {
        try {
            const result = await TaskModel_1.TaskModel.findByIdAndUpdate(id, { status: body.status == false ? true : false, description: body.description, updatedAt: Date.now() });
            return { result: result };
        }
        catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async delete(id) {
        try {
            const data = await TaskModel_1.TaskModel.findByIdAndDelete(id);
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
    (0, tsoa_1.Put)("/update/:id"),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Delete)("/delete/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
TaskController = __decorate([
    (0, tsoa_1.Route)("api/task")
], TaskController);
exports.default = TaskController;
