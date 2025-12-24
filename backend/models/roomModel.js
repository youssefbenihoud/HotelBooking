import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  facilities: [{
    name: { type: String, required: true },
    icon: { type: String, required: true }
  }]
}, { timestamps: true });

const roomModel = mongoose.models.room || mongoose.model("room", roomSchema);

export default roomModel;
