import dotenv from 'dotenv'
import express from "express";
import cors from 'cors'
import { userRouter } from './router/userRouter';
/* import { musicGenreRouter } from './router/MusicGenreRouter';
import { albumRouter } from './router/AlbumRouter';
import { musicRouter } from './router/musicRouter';
import { playlistRouter } from './router/playlistRouter'; */

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

export default app;


app.use("/user", userRouter);
/* app.use("/music/genre", musicGenreRouter);
app.use('/album', albumRouter);
app.use('/music', musicRouter)
app.use('/playlist', playlistRouter) */
