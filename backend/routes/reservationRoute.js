import express from "express";
import { createReservation, listReservations } from "../controllers/reservationController.js";
import authMiddleware from "../middleware/auth.js";

const reservationRouter = express.Router();

reservationRouter.post("/create", authMiddleware, createReservation);
reservationRouter.get("/list", authMiddleware, listReservations);

export default reservationRouter;