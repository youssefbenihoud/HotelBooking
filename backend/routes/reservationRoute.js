import express from "express";
import { createReservation, listReservations, listAllReservations, removeReservation } from "../controllers/reservationController.js";
import authMiddleware from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const reservationRouter = express.Router();

reservationRouter.post("/create", authMiddleware, createReservation);
reservationRouter.get("/list", authMiddleware, listReservations);
reservationRouter.get("/list-all", adminAuth, listAllReservations);
reservationRouter.post("/remove", adminAuth, removeReservation);


export default reservationRouter;