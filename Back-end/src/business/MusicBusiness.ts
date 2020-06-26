import { MusicDatabase } from "../data/MusicDatabase";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { TokenManager } from "../services/TokenManager";
import { IdManager } from "../services/IdManager";
import { UserType } from "../models/User";
import { Music } from "../models/Music";
import { ContentList } from "../messages/ContentList";
import { GenericResult } from "../messages/GenericResult";
import { Creation } from "../messages/Creation";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenericError } from "../errors/GenericError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { NotFoundError } from "../errors/NotFoundError";


export class MusicBusiness {
  constructor(
    private musicDatabase: MusicDatabase,
    private albumDatabase: AlbumDatabase,
    private tokenManager: TokenManager,
    private idManager: IdManager
  ) { }

  public async create(name: string, albumId: string, token: string): Promise<Creation> {
    if (!name || !token || !albumId) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Access denied")
    }

    const album = await this.albumDatabase.getAlbumByIdOrName(albumId)
    if (!album) {
      throw new NotFoundError("Album not found")
    }
    if (userData.id !== album.getBandId()) {
      throw new UnauthorizedError("This album doesn't belong to Band loged")
    }

    const music = await this.musicDatabase.getMusicIntoAlbumByName(name, albumId)
    if (music) {
      throw new GenericError("This music already exists in this album")
    }

    const musicId = this.idManager.generateId()

    await this.musicDatabase.createMusic(
      new Music(musicId, name, albumId, userData.id)
    );

    return new Creation("Music created")
  }

  public async getMusicByAlbum(albumId: string, token: string): Promise<ContentList> {
    if (!albumId || !token) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Access denied")
    }
    if (albumId === 'all') {
      albumId = '%'
    }
    const musicList = await this.musicDatabase.getMusicByAlbum(albumId)

    return new ContentList(musicList.map(music => ({
      id: music.getId(),
      name: music.getName(),
      albumId: music.getAlbumId(),
      image: music.getAlbumImage()
    })))
  }

  public async delete(id: string, token: string): Promise<GenericResult> {
    if (!id || !token) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.BAND) {
      throw new UnauthorizedError("Acesso negado")
    }

    await this.musicDatabase.delete(id)

    return new GenericResult("Música deletada")
  }

  /* public async getDetails(id: string, token: string):Promise<GenericResult> {
    if (!id || !token) {
      throw new InvalidParameterError("Missing input");
    }

    const userData = this.tokenManager.retrieveDataFromToken(token)
    if (userData.type !== UserType.CUSTOMER) {
      throw new UnauthorizedError("Access denied")
    }

    const music = await this.musicDatabase.getDetails(id)

    music[0].genre = [music[0].genre]

    if (music.length > 0) {
      for (let index = 1; index < music.length; index++) {
        music[0].genre.push(music[index].genre);
      }

    }
    return new GenericResult({details: music[0]} )
  } */
}