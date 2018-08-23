function reversNumber(num){
            let result;
            num = num + '';
            if(num < 0){
                num += '-';
                 num = num.split('');
                  num.shift();
                result = num.reverse().join('');
            }else{
                result = num.split('').reverse().join('');
            }
        return result;   
        
}
reversNumber();