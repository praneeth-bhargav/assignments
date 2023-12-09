const fs=require('fs');
fs.readFile('temp.txt','utf-8',(err,data)=>{
    if(err){
        console.log("no file readed");
    }else{
        console.log(data);
    }
})
let count=0;
for(let i=0;i<10000000000000;i++){
    count++;
}