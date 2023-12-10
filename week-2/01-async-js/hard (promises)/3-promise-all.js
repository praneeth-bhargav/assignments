/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function waitOneSecond(a) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Resolved after 1 second"),a*1000);
    })
}

function waitTwoSecond(b) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),b*1000);
    })
}
function waitThreeSecond(c) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(),c*1000);
    })
}

function calculateTime(a,b,c) {
    let date=Date.now();
    return Promise.all([waitOneSecond(a),waitTwoSecond(b),waitThreeSecond(c)]).then(()=>{
        // console.log(, "millisecond");;
        return Date.now()-date;
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = calculateTime;