
function Client(user, id, email, balance){
    this.user = user;
    this.id = id;
    this.email = email;
    this.balance = balance;

    this.deposit = function(value){
        this.balance += value
    }
}

function Savings(user, id, email, balance, balanceSavings){
    Client.call(this, user, id, email, balance)
    this.balanceSavings = balanceSavings
}

const Pedro = new Savings('Pedro', '123456', 'pedro@email.com', 1000, 500)

console.log(Pedro)
