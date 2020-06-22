import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const user = new UserController();

userRouter.post("/signIn", user.signIn);
userRouter.post("/login", user.login)

userRouter.get("/band", user.getAllBands)
userRouter.get("/band-to-aprove", user.getBandsToApprove)

userRouter.put("/band", user.approveBand)
userRouter.put('/customer/:id', user.approveCustomer)
userRouter.put('/', user.updateUser)