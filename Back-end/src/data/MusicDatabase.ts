import { BaseDatabase } from "./BaseDatabase";
import { AlbumDatabase } from './AlbumDatabase'
import { UserDatabase } from "./UserDatabase";
import { AlbumGenreDatabase } from "./AlbumGenreDatabase";
import { GenreDatabase } from "./GenreDatabase";
import { Music } from "../models/Music";
import { MusicCard } from "../models/MusicCard";

export class MusicDatabase extends BaseDatabase {
  public static TABLE_NAME: string = 'Music'

  private toModel(dbModel?: any): Music | undefined {
    return (
      dbModel &&
      new Music(
        dbModel.id,
        dbModel.name,
        dbModel.album_id,
        dbModel.band_id,
        dbModel.source_link
      )
    )
  }

  public async createMusic(music: Music): Promise<void> {
    await this.setConnection()
      .insert({
        id: music.getId(),
        name: music.getName(),
        album_id: music.getAlbumId(),
        band_id: music.getBandId()
      })
      .into(MusicDatabase.TABLE_NAME)
  }

  public async delete(id: string): Promise<void> {
    await this.setConnection()
      .delete()
      .from(MusicDatabase.TABLE_NAME)
      .where({ id })
  }

  public async getMusicIntoAlbumByName(name: string, albumId: string): Promise<Music | undefined> {
    const result = await this.setConnection()
      .select("*")
      .from(MusicDatabase.TABLE_NAME)
      .where({
        album_id: albumId,
        name
      })

    return this.toModel(result[0])
  }

  public async getMusicByAlbum(albumId: string): Promise<MusicCard[]> {
    const result = await this.setConnection()
      .raw(`
        SELECT m.name, m.id, m.album_id, a.image FROM ${MusicDatabase.TABLE_NAME} m
        JOIN ${AlbumDatabase.TABLE_NAME} a ON m.album_id = a.id
        where a.id LIKE '${albumId}'
        ORDER BY m.name;
      `)

    return result[0].map((music: any) => {
      return (
        music &&
        new MusicCard(
          music.id,
          music.name,
          music.album_id,
          music.image
        )
      )
    })
  }
}