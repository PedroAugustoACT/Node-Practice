
const client = {
    user: 'Pedro',
    age: 20,
    id: '123456789',
    email: 'pedro@email.com',
}

console.log(`Hi ${client.user}!`);
console.log(`Info:`);
console.log(`Age: ${client.age}, ID: ${client.id.substring(0,3)}, Email: ${client.email}`);