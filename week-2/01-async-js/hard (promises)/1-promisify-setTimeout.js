/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),n*1000);
    })
}
// function wait(n) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, n * 1000)
//     })
// }
// let prom=wait(2);
// prom.then(res=>console.log(res)).catch(()=>console.log("error"));

module.exports = wait;
