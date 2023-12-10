/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
function wait2(t) {

}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 3 second"),3000);
    })
}

function calculateTime() {
    let date=Date.now();
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(()=>{
        console.log(Date.now()-date, "millisecond");;
    }).catch((err)=>{
        console.log(err);
    })
}
calculateTime();