

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
    },
    {
        user: 'Caio',
        age: 23,
    }],
    balance: 100,
    deposit:function(value){
        this.balance += value
    },
}

console.log(`$${client.balance}`);

client.deposit(30); 
console.log(`$${client.balance}`);