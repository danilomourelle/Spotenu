import { GenreDatabase } from "../data/GenreDatabase";
import { TokenManager } from "../services/TokenManager";
import { IdManager } from "../services/IdManager";
import { Genre } from "../models/Genre";
import { UserType } from "../models/User";
import { Creation } from "../messages/Creation";
import { ContentList } from "../messages/ContentList";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenericError } from "../errors/GenericError";
import { UnauthorizedError } from "../errors/UnauthorizedError";

export class GenreBusiness {
  constructor(
    private genreDatabase: GenreDatabase,
    private tokenManager: TokenManager,
    private idManager: IdManager
  ) { }

  public async create(name: string, token: string): Promise<Creation> {
    if (!name || !token) {
      throw new InvalidParameterError("Preencha todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Acesso negado")
    }

    const result = await this.genreDatabase.getGenreByName(name)
    if (result) {
      throw new GenericError("Este gênero já existe")
    }

    const id = this.idManager.generateId()

    await this.genreDatabase.createGenre(
      new Genre(id, name)
    );

    return new Creation("Genre created")
  }

  public async getAllGenre(token: string): Promise<ContentList> {
    if (!token) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN && userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Access denied")
    }

    const genresList = await this.genreDatabase.getAllGenre()

    return new ContentList(
      genresList.map(genre => ({
        name: genre.getName(),
        id: genre.getId(),
      }))
    )
  }
}
