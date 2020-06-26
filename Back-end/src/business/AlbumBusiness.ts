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
import { ContentList } from "../messages/ContentList";
import { GenericResult } from "../messages/GenericResult";

export class AlbumBusiness {
  constructor(
    private albumDatabase: AlbumDatabase,
    private albumGenreDatabase: AlbumGenreDatabase,
    private genrerDatabase: GenreDatabase,
    private tokenManager: TokenManager,
    private idManager: IdManager
  ) { }

  public async create(name: string, genreIdList: string[], image: string, token: string): Promise<Creation> {
    if (!name || !token || !image || genreIdList.length === 0) {
      throw new InvalidParameterError("Preencher todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Acesso Negado! \n Tente novamente mais tarde")
    }

    const result = await this.albumDatabase.getAlbumByIdOrName(name)
    if (result) {
      throw new GenericError("Este album já existe")
    }

    const albumId = this.idManager.generateId()

    await this.albumDatabase.createAlbum(
      new Album(albumId, name, userData.id, image)
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

  public async delete(id: string, token: string): Promise<GenericResult> {
    if (!id || !token) {
      throw new InvalidParameterError("Preencher todos os campos");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Acesso Negado! \n Tente novamente mais tarde")
    }

    const result = await this.albumDatabase.getAlbumByIdOrName(id)
    if (!result) {
      throw new GenericError("Album não encontrado")
    }

    await this.albumDatabase.delete(id);

    return new GenericResult("Album deletado")
  }

  public async getAlbunsByBandId(token: string): Promise<ContentList> {
    if (!token) {
      throw new InvalidParameterError("No user logeg in");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Access denied")
    }

    const result = await this.albumDatabase.getAlbunsByBandId(userData.id)

    return new ContentList(result)
  }

  public async getAlbumDetails(id: string, token: string): Promise<GenericResult> {
    if (!token) {
      throw new InvalidParameterError("No user logeg in");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Access denied")
    }

    const result = await this.albumDatabase.getAlbumDetails(id)

    return new GenericResult(result)
  }
}