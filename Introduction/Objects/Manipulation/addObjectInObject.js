
const client = {
    user: 'Pedro',
    age: 20,
    id: '123456789',
    email: 'pedro@email.com',
    phones : {
        phone: '94373293',
        whatsapp: '15432789'
    }
}

client.dependents = {
    user: 'João',
    age: 11,
}

console.log(client);

client.phones.whatsapp = '40028922';
client.dependents.user = 'João Guilherme';

console.log(client);
