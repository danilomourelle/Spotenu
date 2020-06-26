import { BaseDatabase } from "./BaseDatabase";
import { AlbumGenreDatabase } from "./AlbumGenreDatabase";
import { GenreDatabase } from "./GenreDatabase";
import { MusicDatabase } from "./MusicDatabase";
import { Album } from "../models/Album";

export class AlbumDatabase extends BaseDatabase {
  public static TABLE_NAME: string = "Album"

  private toModel(dbModel?: any): Album | undefined {
    return (
      dbModel &&
      new Album(
        dbModel.id,
        dbModel.name,
        dbModel.band_id,
        dbModel.image
      )
    )
  }

  public async createAlbum(album: Album): Promise<void> {
    await this.setConnection()
      .insert({
        id: album.getId(),
        name: album.getName(),
        band_id: album.getBandId(),
        image: album.getImage()
      })
      .into(AlbumDatabase.TABLE_NAME);
  }

  public async delete(id: string): Promise<void> {
    await this.setConnection()
      .delete()
      .from(MusicDatabase.TABLE_NAME)
      .where({ album_id: id })

    await this.setConnection()
      .delete()
      .from(AlbumGenreDatabase.TABLE_NAME)
      .where({ album_id: id })

    await this.setConnection()
      .delete()
      .from(AlbumDatabase.TABLE_NAME)
      .where({ id: id })
  }

  public async getAlbumByIdOrName(albumInfo: string): Promise<Album | undefined> {
    const result = await this.setConnection()
      .select("*")
      .from(AlbumDatabase.TABLE_NAME)
      .where({ id: albumInfo })
      .orWhere({ name: albumInfo })

    return this.toModel(result[0]);
  }

  public async getAlbunsByBandId(bandId: string): Promise<Album[]> {
    const result = await this.setConnection()
      .select('name', 'id', 'image')
      .from(AlbumDatabase.TABLE_NAME)
      .where({ band_id: bandId })
      .orderBy('name')

    return result.map((album: any) => {
      return this.toModel(album) as Album
    })
  }

  public async getAlbumDetails(id: string): Promise<any> {
    const genres = await this.setConnection()
      .raw(`
        SELECT g.name as name FROM ${AlbumDatabase.TABLE_NAME} a
        JOIN ${AlbumGenreDatabase.TABLE_NAME} arg ON a.id = arg.album_id
        JOIN ${GenreDatabase.TABLE_NAME} g ON arg.genre_id = g.id 
        WHERE a.id = '${id}'
        `)
    const musicQtd = await this.setConnection()
      .raw(`
        SELECT COUNT(*), album_id FROM ${MusicDatabase.TABLE_NAME} GROUP BY album_id
        WHERE album_id = '${id}'
      `)

    return {
      musicQtd: musicQtd[0][0],
      genres: genres[0]
    }
  }
}