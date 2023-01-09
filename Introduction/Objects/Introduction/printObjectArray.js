
const client = {
    user: 'Pedro',
    age: 20,
    id: '123456789',
    email: 'pedro@email.com',
}

const keys = ['user','age', 'id', 'email'];

//console.log(client[keys[0]]);

keys.forEach(key => console.log(client[key]));