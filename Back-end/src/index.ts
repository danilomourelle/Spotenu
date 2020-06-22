import dotenv from 'dotenv'
import express from "express";
import { userRouter } from './router/UserRouter';
import { musicGenreRouter } from './router/MusicGenreRouter';
import { albumRouter } from './router/AlbumRouter';
import { musicRouter } from './router/musicRouter';
import { playlistRouter } from './router/playlistRouter';

dotenv.config();

const app = express();

app.use(express.json());

export default app;


app.use("/user", userRouter);
app.use("/music/genre", musicGenreRouter);
app.use('/album', albumRouter);
app.use('/music', musicRouter)
app.use('/playlist', playlistRouter)
