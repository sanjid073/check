{
    // Getter and setter
    class BankAccount{
        public readonly id : number;
        public  name : string;
        private _balance : number;
 
         constructor (id : number, name : string, _balance : number) {
                this.id = id;
                this.name = name;
                this._balance = _balance
         }
         

         set deposit (amount : number){
            this._balance = this._balance + amount
         }

         get Getbalance (){
            return this._balance
         }
 
     }
 
     const goribManusArAccount = new BankAccount(11, "gorib" , 20);
     goribManusArAccount.deposit = 70;
     const myBalace = goribManusArAccount.Getbalance;
     console.log(myBalace);
 
}