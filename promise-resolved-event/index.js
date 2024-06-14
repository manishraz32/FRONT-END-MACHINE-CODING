// const resolvedButtonElement = document.querySelector('.resolved');


// const myPromise = new Promise((resolve, reject) => {
//     resolvedButtonElement.addEventListener('click', () => {
//         resolve("promise resolved");
//     })
// })

// console.log("myPromise", myPromise);

// myPromise.then((value) => console.log(value))
//     .catch((error) => console.log("some error occure"));

async function myFun() {
    await "promise resolved";
}

const promise = myFun();
promise.then((val) => console.log("val", val));