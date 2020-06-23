import { AlbumDatabase } from "../data/AlbumDatabase";
import { AlbumGenreDatabase } from "../data/AlbumGenreDatabase";
import { GenreDatabase } from "../data/GenreDatabase";
import { TokenManager } from "../services/TokenManager";
import { IdManager } from "../services/IdManager";
import { Album } from "../models/Album";
import { UserType } from "../models/User";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { AlbumGenre } from "../models/AlbumGenre";
import { Creation } from "../messages/Creation";
import { GenericError } from "../errors/GenericError";

export class AlbumBusiness {
  constructor(
    private albumDatabase: AlbumDatabase,
    private albumGenreDatabase: AlbumGenreDatabase,
    private genrerDatabase: GenreDatabase,
    private tokenManager: TokenManager,
    private idManager: IdManager
  ) { }

  public async create(name: string, genreIdList: string[], token: string): Promise<Creation> {
    if (!name || !token || genreIdList.length === 0) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Access denied")
    }

    const result = await this.albumDatabase.getAlbumByIdOrName(name)
    if(result){
      throw new GenericError("This Album already exists")
    }

    const albumId = this.idManager.generateId()

    await this.albumDatabase.createAlbum(
      new Album(albumId, name, userData.id)
    );

    const genreListFromDB = await this.genrerDatabase.getAllGenre()

    for (const genre of genreListFromDB) {
      if (genreIdList.includes(genre.getId())) {
        await this.albumGenreDatabase.createAlbumGenre(
          new AlbumGenre(albumId, genre.getId())
        )
      }
    }
    return new Creation("Album Created")
  }
}