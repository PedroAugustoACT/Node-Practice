
const client = {
    user: 'Pedro',
    age: 20,
    id: '123456789',
    email: 'pedro@email.com',
    phones : {
        phone: '94373293',
        whatsapp: '15432789'
    },
    dependents: [{
        user: 'João',
        age: 11,
        youngest: true,
    },
    {
        user: 'Ana Carla',
        age: 45,
        youngest: false,
    }]
}
console.log(client);

client.dependents.push({
    user:'Caio',
    age: 23,
})

console.log(client);

const youngestSon = client.dependents.filter(dependent => dependent.youngest===true);

console.log(youngestSon);

