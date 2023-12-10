/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const now=Date.now();
    while(Date.now()-now<seconds){

    }
}
sleep(3000);
console.log("now running after",3000,"seconds");