"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const taskRoutes_1 = __importDefault(require("./Routes/taskRoutes"));
const database_1 = require("./Services/database");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL || "";
(0, database_1.connect)(databaseUrl);
const corsOptions = {
    origin: ['http://localhost:3000'],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use("/api/task", taskRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});
