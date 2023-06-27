
const books = require('./books')


function insertionSort(arr){

    for (let index = 0; index < books.length; index++){
        let test = index
        while(test > 0 && books[test].value < books[test-1].value){
            let currentBook = books[test]
        
            let cheaperBook = books[test-1]
        
            books[test] = cheaperBook
            books[test-1] = currentBook

            test--
        }
    }
    console.log(arr)
}
insertionSort(books)