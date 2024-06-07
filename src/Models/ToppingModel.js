"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToppingModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const toppingSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
    },
});
exports.ToppingModel = mongoose_1.default.model("Topping", toppingSchema);
