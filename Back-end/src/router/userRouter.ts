import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const user = new UserController();

userRouter.post("/signIn", user.signIn);
userRouter.post("/login", user.login)

userRouter.get("/band", user.getAllBands)
userRouter.get("/band-to-approve", user.getBandsToApprove)

userRouter.put("/band/:id", user.approveBand)
userRouter.put("/band", user.approveAllBands)
userRouter.put('/', user.updateUser)