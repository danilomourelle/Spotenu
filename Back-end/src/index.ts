import dotenv from 'dotenv'
import express from "express";
import cors from 'cors'
import { userRouter } from './router/userRouter';
import { genreRouter } from './router/genreRouter';
import { albumRouter } from './router/albumRouter';
import { musicRouter } from './router/musicRouter';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());


app.use("/user", userRouter);
app.use("/genre", genreRouter);
app.use('/album', albumRouter);
app.use('/music', musicRouter)

export default app;
