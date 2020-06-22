import { GenreDatabase } from "../data/GenreDatabase";
import { TokenManager } from "../services/TokenManager";
import { IdManager } from "../services/IdManager";
import { Genre } from "../models/Genre";
import { UserType } from "../models/User";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenericError } from "../errors/GenericError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { Creation } from "../messages/Creation";
import { ContentList } from "../messages/ContentList";

export class GenreBusiness {
  constructor(
    private genreDatabse: GenreDatabase,
    private tokenManager: TokenManager,
    private idManager: IdManager
  ) { }

  public async create(name: string, token: string): Promise<Creation> {
    if (!name || !token) {
      throw new InvalidParameterError("Missing input");
    }
  
    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.ADMIN) {
      throw new UnauthorizedError("Access denied")
    }

    const result = await this.genreDatabse.getGenreByName(name)
    if (result) {
      throw new GenericError("This genre already exists")
    }

    const id = this.idManager.generateId()

    await this.genreDatabse.createGenre(
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

    const genresList = await this.genreDatabse.getAllGenre()
    
    return new ContentList(
      genresList.map(genre => ({
        name: genre.getName(),
        id: genre.getId(),
      }))
    )
  }
}
