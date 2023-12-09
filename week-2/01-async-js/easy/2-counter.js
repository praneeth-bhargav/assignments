let counter=0;
function f(){
    if(counter==5){
        return;
    }
    console.log(counter++);
    setTimeout(f,1000);
}
setTimeout(f,1000);