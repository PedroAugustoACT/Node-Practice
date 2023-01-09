
class Client{
    constructor(user, id, email, balance){
    this.user = user;
    this.id = id;
    this.email = email;
    this.balance = balance;}

    deposit(value){
        this.balance += value
    }

    showBalance(){
        console.log(this.balance)
    }
}


const Pedro = new Client('Pedro', '123456', 'pedro@email.com', 1000)

//console.log(Pedro)
Pedro.deposit(200)
Pedro.showBalance()
console.log(Pedro)

