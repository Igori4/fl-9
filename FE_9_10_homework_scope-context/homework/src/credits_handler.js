  function userCard(key){
      let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        parcentage = 100,
        tax = 0.5,
        type,
        credits;
        return{

         getCardOptions(){
          return{ key, balance , transactionLimit, historyLogs};
    },
        putCredits(amount){
            type = 'Received credits';
            credits = amount;
            balance += amount;
            historyLogsing();
    },
        takeCredits(amount){
            type = 'Withdrawal credits';
            credits = amount;
            if(amount > balance && amount > transactionLimit){
                console.log('Error do not have money!');
            }else{
                balance -= amount;
            }
            historyLogsing();
    },
        setTransactionLimit(amount){
            type = 'Transaction limits change';
            credits = amount;
            transactionLimit = amount;
            historyLogsing();
    },
        transferCredits(amount, card){
            let cash = amount - amount * tax / parcentage ;
            if(cash > balance){
                console.log('Error no money on balance!')
            }else{
                this.takeCredits(cash);
                card.putCredits(amount);
            }
    }
  }
  function historyLogsing(){
      historyLogs.push({
        operationType: type,
        credits: credits,
        operationTime:new Date().toLocaleString('en-GB')});
  }
}

class UserAccount{
    constructor(name){
        this.name = name;
        this.card = [];
        this.maxCard = 3;
    }
    addCard(){
        if(this.card.length <= this.maxCard ){
            this.card.push(userCard(this.card.length + 1));
        }else{
            console.log('Sorry! You can\'t have more than 3 credit cards!');      
       
        }
    }
    getCardByKey(key){
       return this.card[key-1];
    }
}


