"use strict";
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
class BankAccount {
    constructor(money) {
        this.money = money;
    }
    deposit(value) {
        this.money += value;
    }
}
const bankAccount1 = new BankAccount(3000);
console.log('Before deposit >>> ', bankAccount1);
bankAccount1.deposit(500);
console.log('After deposit >>> ', bankAccount1);
class Myself {
    constructor(name, bankAccount, hobbies) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
}
let myself1 = new Myself('Smith', new BankAccount(1000), ['Swimming', 'Sleeping']);
console.log('Before deposit >>> ', myself1);
myself1.bankAccount.deposit(200);
console.log('After deposit >>> ', myself1);
let banAccount2 = {
    money: 5400,
    deposit: function (value) {
        this.money += value;
    }
};
console.log('Before deposit >>> ', banAccount2);
banAccount2.deposit(124);
console.log('After deposit >>> ', banAccount2);
