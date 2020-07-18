export class AlbumGenre{
  constructor(
    private albumId: string,
    private genreId: string
    ){}

    public getAlbumId(): string{
      return this.albumId
    }

    public getGenreId():string {
      return this.genreId
    }
}