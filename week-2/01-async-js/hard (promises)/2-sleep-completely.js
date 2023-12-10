/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep (seconds) {
    return new Promise((resolve,reject)=>{
        const now=Date.now();
        while(Date.now()-now<seconds){

        }
        resolve();
    })
    
}
sleep(3000);
// console.log("now running after",3000,"seconds");

module.exports = sleep;
