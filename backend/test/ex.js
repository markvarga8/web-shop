const lunr = require("lunr")

const posts = [
  {
    id: "1",
    title: "What is JavaScript?",
    description:
      "JavaScript is a high-level, object-oriented programming language based on the ECMAScript specification."
  },
  {
    id: "2",
    title: "What is Java?",
    description:
      "Java is a cross-platform object-oriented programming language which at first developed by the Sun Microsystems."
  },
  {
    id: "3",
    title: "What is React?",
    description:
      "React is a popular JavaScript library which heavily used to build single-page applications."
  }
]

/* const idx = lunr(function() {
  this.field("title")
  this.field("description")

  for (let i = 0; i < posts.length; i++) {
    this.add(posts[i])
  }
})

const result = idx.search("object oriented language")
console.log(result) */


function searchIndex (searchData) {
  const idx = lunr(function () {
    this.field('title')
    /* for (let i = 0; i < context.state.photos.length; i++) {
      this.add(context.state.photos[i].title)
      console.log(context.state.photos[i].title)
    } */
    posts.forEach(function (product) {
      this.add(product)
      // console.log(product.title)
    }, this)
  })
  const result = idx.search(searchData)
  console.log(searchData)
  console.log(result)
}

searchIndex('ha');
