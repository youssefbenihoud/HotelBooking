import express from "express";
import { loginUser, registerUser, getUsers, removeUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list", getUsers);
userRouter.post("/remove", removeUser);


export default userRouter;
