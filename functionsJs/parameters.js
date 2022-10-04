

// function userInfo(user, age){
//     return `my name is ${user} and i have ${age} years`;
// }

// console.log(userInfo('Pedro', 20));

function multiply(num1, num2){
    return num1 * num2;
}

function fatorial(number){
    for(let i = number-1; i > 0; i--){
        number = number * i;
        //console.log(number);
    }
    return number;
}

console.log(multiply(fatorial(5), fatorial(3)));