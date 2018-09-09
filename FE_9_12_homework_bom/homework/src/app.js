const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];
const firstPage = document.querySelector('#firstPage');
const secondPage = document.querySelector('#secondPage');
const thirdPage = document.querySelector('#thirdPage');

const btnAddTask = document.querySelector('#addTask');
const btnAddNew = document.querySelector('#addNew');



btnAddTask.onclick= function(){
        firstPage.style.display = 'none';
        secondPage.style.display = 'block';
} 
btnAddNew.onclick = function(){
    let taskVal = document.getElementById('addNewTask').value;

    document.createElement('btn')
    secondPage.style.display = 'none';
    firstPage.style.display = 'block';


}
let a = document.getElementById('aplication');


rootNode.appendChild(/* Append your list item node*/);
