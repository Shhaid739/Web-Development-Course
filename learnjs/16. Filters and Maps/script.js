let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" },
];
// FILTER
//NOTE--curValue is parameter, can name different 
//     should add return in map and filter 

// const newArray = students.filter((curValue) => {
//     if(curValue.id % 2 == 0) return true;                  //which we need is a return true statement
//     else return false;
// })

// console.log("New Array here...")
// console.log(newArray);


//2nd way to write but not recommended
// const newArray = [];

// for(let i = 0; i<students.length; i++) {
//     if(students[i].id%2 == 0) {
//         newArray.push(students[i]);
//     }
// }


// MAPS AND FILTER


const names = students
    .filter((curValue) => curValue.sports === "Cricket")
    .map((curValue, index, array) => {
        return `<li>${curValue.name}</li>`;
    });

console.log(names);

const div = document.getElementById("container");

div.innerHTML = `<ul>${names.join("")}</ul>`;



