
let names = ['Ana', 'Marcos', 'Maria', 'Pedro', 'Suellen', 'João', 'Caio'];
let notes = [7, 4.5, 10, 8, 9, 3, 6];

let fail = names.filter((_, index) => notes[index] < 5);
let recuperation = names.filter((_, index) => notes[index] >= 5 && notes[index] < 7);
let approved = names.filter((_, index) => notes[index] >= 7);

console.log(`Failed: ${fail}`);
console.log(`Recuperation: ${recuperation}`);
console.log(`Approved: ${approved}`);

