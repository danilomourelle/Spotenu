import express from "express";
import { GenreController } from "../controller/GenreController";

export const genreRouter = express.Router();

const genre = new GenreController()

genreRouter.get("/all", genre.getAllGenre);

genreRouter.put("/create", genre.create);


