import express from "express";
import {
  addRoom,
  listRoom,
  removeRoom,
  singleRoom,
} from "../controllers/roomControllers.js";
import upload from "../middleware/multer.js";

const roomRouter = express.Router();

roomRouter.post("/add", upload.single("image"), addRoom);
roomRouter.get("/list", listRoom);
roomRouter.get("/:id", singleRoom);
roomRouter.post("/remove", removeRoom);

export { roomRouter };
