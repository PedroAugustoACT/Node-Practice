
const numbers = [10, 6.5, 4, 7.5];

let sumNotes = 0;

for(let i=0; i < numbers.length; i++){
    sumNotes += numbers[i];
}

let mean = sumNotes/numbers.length;

console.log(mean)
