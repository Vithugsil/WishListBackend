import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

export const TaskModel = mongoose.model("Task", taskSchema);