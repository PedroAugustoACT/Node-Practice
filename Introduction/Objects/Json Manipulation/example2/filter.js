
const data = require('./clients.json')

function filterNoComplements(list){
    return list.filter((client) => {
        return (client.adress.apartment && !client.adress.hasOwnProperty('complement'))
    })
}

const filteredList = filterNoComplements(data)

console.log(filteredList)