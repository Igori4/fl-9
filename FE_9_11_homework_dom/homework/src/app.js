let btn = document.querySelector('#add').disabled = true;
let items = document.querySelector('.item');
let btn_done = document.querySelector('.button-done');
let btn_dlt = document.querySelector('.button-dlt');
let input = document.querySelector('#input');
let len = input.value.trim().length;
let minNum = 0;

input.onkeyup = function(){
let input = document.getElementById('#input');
if (!input.value.trim()) {
    document.querySelector('#add').disabled = false;
}

}
 
// rootNode.appendChild(/*sdfsdf*/);
function addAction(){
    let btn_ok = document.createElement('button')
    let i = document.createElement('i');
    btn_ok.setAttribute('class','material-icons');
    i.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    btn_done.appendChild(i);
    let input = document.querySelector('#input').value;
    let val = document.createTextNode(input);
    console.log(val);
    let p_text = document.querySelector('#text');
        console.log(p_text);

}
addAction();