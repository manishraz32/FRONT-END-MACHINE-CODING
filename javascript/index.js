
// let company = {
//     name: "A",
//     pay: function () {
//         console.log("paying");
//     }
// }

// let worker = {
//     id: 1,
//     work: function () {
//         console.log("working");
//     }
// }

// worker.__proto__ = company;
// let intern = Object.create(worker, { exp: { value: 2 } });
// console.log("intern", intern);
// console.log(intern.work());
// console.log(intern.pay())

// console.log("company", company);
// console.log("worker", worker);
// worker.__proto__ = company;
// console.log("company", company);
// console.log("worker", worker);


// let workers = []; // Array
// console.log(workers.constructor);
// let company = {
//     name: "BEST",
// }; // object
// console.log(company.constructor);



// let student = {
//     id: 1,
// };
// let tution = {
//     id: 2,
// };
// let school = {
//     id: 3,
// };
// student.__proto__ = school; //level1 inheritance
// student.__proto__.__proto__ = tution; //level2 inheritance
// console.log("student", student);
// console.log(student.id); //the student object's property
// console.log(student.__proto__.id); //school object's property





// Chunk of array

function chunk(arr, size) {
    let ans = [];
    let chunkSize = size;
    let n = arr.length;
    let i = 0;
    while(i < n) {
        let subArr = [];
        while(size-- > 0 && i < n) {
            subArr.push(arr[i++]);
        }
        ans.push(subArr);
        size = chunkSize;
    }
    return ans
}

// const chunkArr = chunk([1, 2, 3, 4, 5, 6], 2);
// console.log(chunkArr);





// Create a Counter

// count() // 2
// count() // 1
// count() // 3

// function count(val) {
//     var newVal = 1;
//     return (function iffi() {
//         let currentValue = newVal;
//         newVal = newVal + 1; 
//         return currentValue;
//    })();
// }

let count = (() => {
    let counter = 1;
    let myFun = function () {
        return counter++;
    }
    myFun.reset = function () {
        counter = 1;
    }
    return myFun;
})();

console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3
count.reset();
console.log(count()) // 1
console.log(count()) // 2
console.log(count()) // 3


























