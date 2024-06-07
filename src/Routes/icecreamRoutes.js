"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const IcecreamController_1 = __importDefault(require("../Controllers/IcecreamController"));
const router = express_1.default.Router();
const controller = new IcecreamController_1.default();
router.post("/create", async (req, res) => {
    const response = await controller.create(req.body);
    return res.status(response === "OK" ? 200 : 400).send(response);
});
router.get("/getAll", async (req, res) => {
    const response = await controller.all();
    return res.status(response.error ? 400 : 200).send(response);
});
router.patch("/update", async (req, res) => {
    const response = await controller.update(req.body);
    return res.status(response.error ? 400 : 200).send(response);
});
router.delete("/delete/:id", async (req, res) => {
    const response = await controller.delete(req.params.id);
    return res.status(response.error ? 400 : 200).send(response);
});
router.get("/getToppings", async (req, res) => {
    const response = await controller.allToppings();
    return res.status(response.error ? 400 : 200).send(response);
});
router.get("/query", async (req, res) => {
    const response = await controller.query();
    return res.status(response.error ? 400 : 200).send(response);
});
router.get("/fields", async (req, res) => {
    const response = await controller.fields();
    return res.status(response.error ? 400 : 200).send(response);
});
exports.default = router;
