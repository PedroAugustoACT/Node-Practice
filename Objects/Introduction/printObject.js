
const client = {
    user: 'Pedro',
    age: 20,
    cpf: '123456789',
    email: 'pedro@email.com',
}

console.log(`Hi ${client.user}!`);
console.log(`Info:`);
console.log(`Age: ${client.age}, CPF: ${client.cpf.substring(0,3)}, Email: ${client.email}`);