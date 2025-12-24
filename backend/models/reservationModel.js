import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "room", required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guests: { type: Number, required: true },
  },
  { timestamps: true }
);

const reservationModel =
  mongoose.models.reservation ||
  mongoose.model("reservation", reservationSchema);
export default reservationModel;
