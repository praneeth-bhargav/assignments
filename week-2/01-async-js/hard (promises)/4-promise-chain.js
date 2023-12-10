/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(a) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 3 second"),a*1000);
    })
}

function waitTwoSecond(a) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 3 second"),a*1000);
    })
}

function waitThreeSecond(a) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 3 second"),a*1000);
    })
}

function calculateTime(a,b,c) {
    let past=Date.now();
    return waitOneSecond(a).then(()=>waitTwoSecond(b)).then(()=>waitThreeSecond(c)).then(()=>Date.now()-past);
}
module.exports=calculateTime