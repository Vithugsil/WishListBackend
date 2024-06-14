import mongoose from "mongoose";



const taskSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        required: false,   
    },
    description: {
        type: String,
        required: true
    },
    createdAt:  {
        type: Date,
        required: false,
    },
    updatedAt:  {
        type: Date,
        required: false,
    }
})

export const TaskModel = mongoose.model("Task", taskSchema);