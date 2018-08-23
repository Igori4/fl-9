function getMin(){
        let number = [];
        for(let i = 0; i < arguments.length; i++){
           number.push(arguments[i]) ;
        }
        let index = number.length;
        let result = Infinity;
        while(index--){
            if(number[index] < result){
                result = number[index]
            }
        }
        return result;    
}
getMin();


