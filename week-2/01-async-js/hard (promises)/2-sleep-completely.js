/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep (seconds) {
    const now=Date.now();
    while(Date.now()-now<seconds){

    }
}
sleep(3000);
console.log("now running after",3000,"seconds");
function sleep(milliseconds) {
}

module.exports = sleep;
