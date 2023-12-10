/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 1 second"),1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 2 second"),2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 3 second"),3000);
    })
}

async function calculateTime() {
    let now=Date.now();
    let a=await waitOneSecond();
    let b=await waitTwoSecond();
    let c=await waitThreeSecond();
    console.log(Date.now()-now);
    console.log(a,b,c);
    
}
calculateTime();