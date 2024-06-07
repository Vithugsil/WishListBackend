"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const drinkSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
    },
    size: {
        required: true,
        type: Number,
    }
});
exports.DrinkModel = mongoose_1.default.model("Drink", drinkSchema);
