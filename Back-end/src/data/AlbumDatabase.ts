import { BaseDatabase } from "./BaseDatabase";
import { Album } from "../models/Album";

export class AlbumDatabase extends BaseDatabase {
  public static TABLE_NAME: string = "Album"

  private toModel(dbModel?: any): Album | undefined {
    return (
      dbModel &&
      new Album(
        dbModel.id,
        dbModel.name,
        dbModel.band_id
      )
    )
  }

  public async createAlbum(album: Album): Promise<void> {
    await this.setConnection()
      .insert({
        id: album.getId(),
        name: album.getName(),
        band_id: album.getBandId()
      })
      .into(AlbumDatabase.TABLE_NAME);
  }

  public async getAlbumByIdOrName(albumInfo: string): Promise<Album | undefined> {
    const result = await this.setConnection()
      .select("*")
      .from(AlbumDatabase.TABLE_NAME)
      .where({ id: albumInfo })
      .orWhere({name: albumInfo})

    return this.toModel(result[0]);
  }

  public async getAlbunsByBandId(bandId: string): Promise<Album[]> {
    const result = await this.setConnection()
      .select('name', 'id')
      .from(AlbumDatabase.TABLE_NAME)
      .where({ band_id: bandId })

      return result.map((album: any) => {
        return this.toModel(album) as Album
      })
  }
}