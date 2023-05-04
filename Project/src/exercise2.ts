let bankAccount: {
    money: number,
    deposit(value: number): void
} = { 
	money: 2000, 
	deposit(value: number) { 
		this.money += value; 
	} 
}; 

let myself: {
    name: string,
    bankAccount: typeof bankAccount,
    hobbies: string[]
} = { 
	name: "John", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);

class BankAccount {
    money: number;
    constructor(money: number) {
        this.money = money;
    }
    deposit(value: number): void {
        this.money += value;
    }
}

const bankAccount1 = new BankAccount(3000);
console.log('Before deposit >>> ', bankAccount1);
bankAccount1.deposit(500);
console.log('After deposit >>> ', bankAccount1);

class Myself {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
    constructor(name: string, bankAccount: BankAccount, hobbies: string[]) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
}

let myself1 = new Myself('Smith', new BankAccount(1000), ['Swimming', 'Sleeping']);
console.log('Before deposit >>> ', myself1);
myself1.bankAccount.deposit(200);
console.log('After deposit >>> ', myself1);

interface IBankAccount {
    money: number;
    deposit(value: number): void;
}

let banAccount2: IBankAccount = {
    money: 5400,
    deposit: function(value: number): void {
        this.money += value;
    }
}
console.log('Before deposit >>> ', banAccount2);
banAccount2.deposit(124);
console.log('After deposit >>> ', banAccount2);