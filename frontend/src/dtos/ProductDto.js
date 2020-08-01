export default class ProductDto {
  constructor (data) {
    if (data) {
      this.albumId = data.albumId
      this.id = data.id
      this.title = data.title
      this.url = data.url
      this.thumbnailUrl = data.thumbnailUrl
    }
  }
}
