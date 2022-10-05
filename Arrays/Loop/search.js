
const students = ['Pedro', 'Suellen', 'João', 'Ana'];
const means = [10 , 7, 9, 6];

let tableStudents = [students, means];

const showStudents = (studentName) => {
    if(tableStudents[0].includes(studentName)){
        let index = tableStudents[0].indexOf(studentName);
        return tableStudents[0][index] + tableStudents[1][index];
    }
    else{
        return 'Error';
    }
}

console.log(showStudents('Pedro'));