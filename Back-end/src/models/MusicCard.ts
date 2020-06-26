export class MusicCard {
  constructor(
    private id: string,
    private name: string,
    private albumId: string,
    private albumImage: string
  ) { }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getAlbumId(): string {
    return this.albumId
  }

  public getAlbumImage(): string {
    return this.albumImage
  }
}