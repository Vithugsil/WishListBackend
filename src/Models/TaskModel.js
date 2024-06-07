"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
exports.TaskModel = mongoose_1.default.model("Task", taskSchema);
