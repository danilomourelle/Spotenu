import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const user = new UserController();

userRouter.post("/signup", user.signupBand);
userRouter.post("/signup", user.signupCustomer);
userRouter.post("/signup", user.signupAdmin)
userRouter.post("/login", user.login)

userRouter.get("/band", user.getAllBands)

userRouter.put("/band/:id", user.approveBand)
userRouter.put('/customer/:id', user.approveCustomer)
userRouter.put('/', user.updateUser)