{
    // access modifiers
    class BankAccount{
       public readonly id : number;
       public  name : string;
       private _balance : number;

        constructor (id : number, name : string, _balance : number) {
               this.id = id;
               this.name = name;
               this._balance = _balance
        }
     
       addBalance (amount : number) {
        this._balance = this._balance + amount
       }
       getBalance () {
        return this._balance
       }

    }

    const goribManusArAccount = new BankAccount(11, "gorib" , 20);
    goribManusArAccount.addBalance(700)
    const myBalace = goribManusArAccount.getBalance()
    console.log(myBalace);

}