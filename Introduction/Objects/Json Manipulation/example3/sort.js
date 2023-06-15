
const data = require('./clients.json')

function sort(list, prop){
    const result = list.sort((a,b) => {
        if(a[prop] > b[prop]){
            return 1
        }
        else if(a[prop] < b[prop]){
            return -1
        }
        else{
            return 0
        }
    })
    return result
}

const sortName = sort(data, 'name')

console.log(sortName)