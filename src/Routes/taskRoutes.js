"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = __importDefault(require("../Controllers/TaskController"));
const router = express_1.default.Router();
const controller = new TaskController_1.default();
router.post("/create", async (req, res) => {
    const response = await controller.create(req.body);
    return res.status(response === "OK" ? 200 : 400).send(response);
    // return res.status(response.error ? 400 : 200).send(response)
});
router.get("/getAll", async (req, res) => {
    const response = await controller.all();
    return res.status(response.error ? 400 : 200).send(response);
});
router.put("/update/:id", async (req, res) => {
    const response = await controller.update(req.params.id, req.body);
    return res.status(response.error ? 400 : 200).send(response);
});
router.delete("/delete/:id", async (req, res) => {
    const response = await controller.delete(req.params.id);
    return res.status(response.error ? 400 : 200).send(response);
});
exports.default = router;
