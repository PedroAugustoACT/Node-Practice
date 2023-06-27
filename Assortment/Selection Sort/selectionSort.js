
const books = require('./books')
const cheaperBooks = require('../Introduction/showBooks')

books.forEach((_, index) => {
    let less = cheaperBooks(books, index)
   
    let currentBook = books[index]
    console.log('Current Book', books[index])

    let cheaperBook = books[less]
    console.log('Cheaper Book', books[less])

    books[index] = cheaperBook
    books[less] = currentBook
   
   })

console.log(books)