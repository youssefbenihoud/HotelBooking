import express from "express";
import {
  addRoom,
  listRoom,
  removeRoom,
  singleRoom,
  updateRoom,
} from "../controllers/roomControllers.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const roomRouter = express.Router();

roomRouter.post("/add", adminAuth, upload.single("image"), addRoom);
roomRouter.get("/list", adminAuth, listRoom);
roomRouter.get("/:id", adminAuth, singleRoom);
roomRouter.post("/remove", adminAuth, removeRoom);
roomRouter.post("/update", adminAuth, upload.single("image"), updateRoom);

export { roomRouter };
