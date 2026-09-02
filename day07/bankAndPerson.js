class BankAccount{
    #balance;

    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
       if(amount > 0){
        this.#balance += amount;
        console.log(`New added amount : ${amount} and Current balance : ${this.#balance}`);
       }
       else{
        console.log("Deposit amount should be greater than 0");
       }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdrawn amount : ${amount} and Current balance : ${this.#balance}`);
        }
        else{
            console.log("Invalid withdraw amount or insufficient balance");
        }
    }

    getBalance(){
        return this.#balance;
    }

}

let myAccount1 = new BankAccount(10);
myAccount1.deposit(500);
myAccount1.withdraw(600);
console.log(`Final balance : ${myAccount1.getBalance()}`);


class Person{
    #name;
    #age;

    constructor(name, age){
        this.#name = name;
        if(age > 0){
        this.#age = age;
        }
        else{
            console.log("Age should be a positive number");
        }
    }

    getName(){
        return this.#name;
    }

    setName(newName){
        this.#name = newName;
    }

    getAge(){
        return this.#age;
    }

    setAge(newAge){
        if(newAge > 0){
            this.#age = newAge;
        }
        else{
            console.log("Age should be a positive number");
        }
    }
}

let person1 = new Person("John", 30);
console.log(`Person Name : ${person1.getName()} and Age : ${person1.getAge()}`);