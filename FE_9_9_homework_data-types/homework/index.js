///task1
let findType = input => typeof input;
//task2 
let forEach = (arr,fun) => {
     for(let i = 0;i < arr.lendth;i++){
        fun(arr[i]);
     }
}
//task3
let map = (arr,fun) => {
    let arr2 = [];
    forEach(arr, el => arr2.push(fun(el)));
    return arr2;
};
//task4
let filter = (arr,fun) => {
    let arr2 =[];
    forEach(arr,el => {
        if(fun(el)){
            arr2.push(el);
        }
    })
}
//task5
let getName = obj => {
    return map(filter(obj, item => item.date > 18 && item.favoriteFruit === 'apple'),item => item.name);
}
//task6
let returnKay = obj => {
    let objKeys = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            objKeys.push(key);
        }
    }
    return objKeys;
}
//task7
let returnValues = objk => {
    let objValues = [];
    for(let value in objk){
        if(objk.hasOwnProperty(value)){
            objValues.push(objk[value]);
        }
    }
    return objValues;
}
//task8
function showFormattedDate(date){
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${month[date.getMonth()]}, ${date.getFullYear()}`;
}
console.log(showFormattedDate(new Date()));