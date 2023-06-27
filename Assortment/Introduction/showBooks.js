

function cheaper(data, index){
    let cheaper = index
    
    for (let i = index; i < data.length; i++){
        if(data[i].value < data[cheaper].value){
            cheaper = i
        }
    }
return cheaper
}

module.exports = cheaper