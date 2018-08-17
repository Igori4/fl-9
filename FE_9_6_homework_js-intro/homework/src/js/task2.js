let maxAngle = 180;
let sideA = prompt('Add side(A) length');
let sideB = prompt('Add side(B) length');
let angle = prompt('Add angle length') * Math.PI / maxAngle;
let sideC;
let sqr;
let per;
if(sideA > 0 && sideB > 0 && angle > 0 && angle < maxAngle){
    cosTheorem(sideA, sideB, angle);
    findSquare(sideA, sideB, angle);
    findPerimetr(sideA, sideB, sideC);
    console.log('Side-C: ' + sideC + '\n' +
                'Triangle square: ' + sqr + '\n' + 
                'Triangle perimeter: ' + per);
  
}else{
    console.log('Invalid date');
}

function cosTheorem(sideA, sideB, angle){
    sideC = Math.round(Math.sqrt( Math.pow(sideA, 2 ) + Math.pow(sideB,2)- 2 * sideA * sideB * Math.cos(angle)
        ) * 100
    ) / 100;
}

function findSquare(sideA,sideB,angle){
    sqr= Math.ceil(1/2 * sideA * sideB * Math.sin(angle));
}

function findPerimetr(sideA,sideB,sideC) {
       per = sideA * 1 + sideB * 1 + sideC * 1 ;
}




