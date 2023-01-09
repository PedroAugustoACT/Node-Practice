
const numbers = [10, 6.5, 4, 7.5];

let sumNotes = 0;

numbers.forEach(number => {
    sumNotes += number
})

let mean = sumNotes / numbers.length;

console.log(mean);

