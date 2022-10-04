
function show(user){
    return `My name is ${user}`;
}

const showArrow = user => `My name is ${user}`;

const sum = (num1, num2) => num1 + num2;

const sumSmall = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return 'only numbers from 1 to 9';
    }
    else{
        return num1 + num2;
    }
}

console.log(sumSmall(2,10));