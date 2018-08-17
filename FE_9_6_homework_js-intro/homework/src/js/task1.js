let price = prompt('Write your price');
let disC = prompt('Write your discount');
let saved = price * disC / 100;
let priceWithdisCount = price - saved;

if(price > 0 && price !== '' && price !==null && disC >= 0 && disC <= 100 && disC !== '' && disC !==null){
                console.log( 'Your Price without discount: ' + price + '\n'
                 + 'Discount: ' + disC + '\n'
                 + 'Price with discount: ' + Math.round(priceWithdisCount) + '\n'
                 + 'Saved: ' + Math.round(saved));
}else{
    alert('Invalid date')
}


