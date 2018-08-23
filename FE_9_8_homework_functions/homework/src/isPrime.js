function isPrime(numberPrime) {
    for(let i = 2; i < numberPrime; i++){
      if(numberPrime % i === 0) {
          return false;
      }
    }
    return numberPrime !== 1;
  }

  isPrime();