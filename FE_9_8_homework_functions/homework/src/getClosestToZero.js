function getClosestToZero(){
        let numbers = arguments[0];
        for(let i = 1;i < arguments.length;i++){
            if(Math.abs(arguments[i]) < Math.abs(numbers)){
                numbers = arguments[i];
            }
        }
        return numbers;
}
getClosestToZero();