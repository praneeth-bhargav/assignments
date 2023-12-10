document.addEventListener("DOMContentLoaded",()=>{
    const timer1=document.getElementById("time-1");
    const timer2=document.getElementById("time-2");
    setInterval(()=>{
        let time=new Date();
        // console.log(typeof time);
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        timer1.innerHTML=`${hours}:${minutes}:${seconds}`;
        let indHours,post='PM';
    if(hours ===0){
        indHours=12;
        post='AM'
    }else if(hours>=12){
        post='PM'
        if(hours>12)
            indHours=hours-12; 
    }
    timer2.innerHTML=`${indHours}:${minutes}:${seconds}:${post}`
    },1000)
    
    
})