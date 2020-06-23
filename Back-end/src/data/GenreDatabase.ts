import { BaseDatabase } from "./BaseDatabase";
import { Genre } from "../models/Genre";

export class GenreDatabase extends BaseDatabase {
  public static TABLE_NAME: string = 'Genre'

  private toModel(dbModel?: any): Genre | undefined {
    return (
      dbModel &&
      new Genre(
        dbModel.id,
        dbModel.name,
      )
    )
  }

  public async createGenre(genre: Genre): Promise<void> {
    await this.setConnection()
      .insert({
        id: genre.getId(),
        name: genre.getName(),
      })
      .into(GenreDatabase.TABLE_NAME);
  }

 public async getGenreByName(name: string): Promise<Genre | undefined> {
    const result = await this.setConnection()
      .select("*")
      .from(GenreDatabase.TABLE_NAME)
      .where({ name })

      return this.toModel(result[0])
  }

  public async getAllGenre(): Promise<Genre[]> {
    const result = await this.setConnection()
      .select("*")
      .from(GenreDatabase.TABLE_NAME)
      .orderBy('name')
      
      return result.map((genre: any) => {
        return this.toModel(genre) as Genre
      })
  }
}