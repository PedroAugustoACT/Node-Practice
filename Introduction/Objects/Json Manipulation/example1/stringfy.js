
const data = require ('./client.json')

const string = JSON.stringify(data) //Convert object in string

console.log(string)
console.log(typeof string)

const object= JSON.parse(string) //Convert string in object

console.log(object)
console.log(typeof object)