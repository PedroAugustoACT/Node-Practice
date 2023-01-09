
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

class Savings extends Client{
    constructor(name, email, cpf, balance, savingBalance){
        super(name, email, cpf, balance);
        this.savingBalance = savingBalance;
    }

    depositSavings(value){
        this.savingBalance += value
    }
}
 const Pedro = new Savings('Pedro', '123456', 'pedro@email.com', 2000, 5000)

 //console.log(Pedro)

 Pedro.deposit(50)
 Pedro.depositSavings(100)
 console.log(Pedro)