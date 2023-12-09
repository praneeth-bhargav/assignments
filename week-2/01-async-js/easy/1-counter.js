let counter=0;
let interval=setInterval(()=>{
    console.log(counter++);
    if(counter===4){
        clearInterval(interval);
    }
},1000);