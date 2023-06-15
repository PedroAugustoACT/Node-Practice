
const data = require('./clients.json')

function find(list, key, value){
    return list.find((item) => item[key].includes(value))
}

const finded = find(data, "name", "Kirby")

console.log(finded)