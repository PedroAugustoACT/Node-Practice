
const notes =  [9, 10, 8, 7, 6];

console.log(notes);

const addNotes = notes.map(note => note >= 10 ? note : ++note)

console.log(addNotes);

