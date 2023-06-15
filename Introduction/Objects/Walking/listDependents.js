
const clients = [
    {
        user: 'Pedro',
        age: 20,
        id: '123456789',
        email: 'pedro@email.com',
        dependents: [{
            user: 'João',
            age: 11,
        },
        {
            user: 'Caio',
            age: 23,
        }],
    },
    {
        user: 'Suellen',
        age: 21,
        id: '987654321',
        email: 'su@email.com',
        dependents: [{
            user: 'Ellen',
            age: 19,
        },
        {
            user: 'Samuel',
            age: 8,
        }],
    },
]

const dependentsList = [...clients[0].dependents,...clients[1].dependents];

console.table(teste)



