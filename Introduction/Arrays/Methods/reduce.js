
const classJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const classJava = [6, 5, 8, 9, 5, 6];
const classPy = [7, 3.5, 8, 9.5];

function meanClasses(classNote){
    const sumNotes = classNote.reduce((accumulator, current) =>
    accumulator + current, 0)
    return sumNotes/classNote.length;
}

console.log(`Mean Js: ${meanClasses(classJs)}`);
console.log(`Mean Java: ${meanClasses(classJava)}`);
console.log(`Mean Py: ${meanClasses(classPy)}`);