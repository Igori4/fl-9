const user = 'User';
const password = 'SuperUser';

let login = prompt('Write your login','Admin');

if(login === null || login === '' ){
    alert('Canceled');
}else if(login.length < 4 ){
    alert( 'I don\'t know any users having name length less than 4 symbols' );
}else if(login !== user){
    alert('I don\'t know you');
}else if(login === user){
     getPasword()
}

function getPasword(){
    let paswordUser = prompt('write your pasword')
    if(paswordUser === null || paswordUser === ''){
        alert('Canceled');
    }else if(paswordUser !== password){
        alert('Wrong password');
    }else if(new Date().getHours() > 20){
        alert('Good evening');
    }else{
        alert('Good day')
    }
}
    

