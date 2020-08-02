const lunr = require('lunr')
const data = this.$state.product.photos

export default function search (search) {
  const idx = lunr(function () {
    this.field('title')
    data.forEach(function (product) {
      this.add(product.title)
      // console.log(product.title)
    }, this)
    const result = idx.search(search)
    console.log(result)
  })
}
