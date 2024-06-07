import mongoose from "mongoose"

const drinkSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  size: {
    required: true,
    type: Number,
  }
})

export const DrinkModel = mongoose.model("Drink", drinkSchema)