import express from "express";
import * as users from "../modules/users/user.controllers"

const userRouter = express.Router();

userRouter.post("/users/register", users.registerUser);
userRouter.get("/users/login", users.login);

export default userRouter;

