//   throw use:
// try {
//     const res = prompt('Are you a robot?');
//     if(res === 'Y') {
//         throw new Error('Robot found')
//     }
// } catch (error) {
//     console.log(error);
// } finally {

// }


//  try, caugh, finally use:
try {
    console.log('before the error')
    //const age = 12;
    //age commented,then error occured 
//then directly run catch block
   
    console.log(age);
    console.log('after the error')
} catch (err) {
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log('From finally')
}

const a = 2 * 4;
console.log("Important", a);

