import express from "express";
import { loginUser, registerUser, getUsers, removeUser } from "../controllers/userController.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list", adminAuth, getUsers);
userRouter.post("/remove", adminAuth, removeUser);


export default userRouter;
