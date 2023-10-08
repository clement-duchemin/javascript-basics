
let resultArray = [[],[]];





function addition(a, b) {
    let total = a + b;
    resultArray[0].push(total);
}

addition(20, 20)
console.log(resultArray);


function soustraction(a, b) {
    let total = a - b;
    resultArray[1].push(total);
}

soustraction(20, 10)
console.log(resultArray);


function multiplication(a, b) {
    let total = a * b;
    resultArray[1].push(total);
}

multiplication(20, 10)
console.log(resultArray);













