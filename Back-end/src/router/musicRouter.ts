import express from "express";
import { MusicController } from "../controller/MusicController";


export const musicRouter = express.Router();

const music = new MusicController();

musicRouter.post("/create", music.create);

musicRouter.delete('/:id', music.delete)

/* musicRouter.get("/details/:musicId", music.getDetails)*/
musicRouter.get("/my-musics/:albumId", music.getMusicByAlbum) 