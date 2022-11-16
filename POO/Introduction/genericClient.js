
function Client(user, id, email, balance){
    this.user = user;
    this.id = id;
    this.email = email;
    this.balance = balance;

    this.deposit = function(value){
        this.balance += value
    }
}


const Pedro = new Client('Pedro', '123456', 'pedro@email.com', 1000)

console.log(Pedro)

