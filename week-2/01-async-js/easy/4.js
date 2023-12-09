const fs=require('fs');
fs.writeFile('write.txt','sldflsdflsfsadfhsdflsdjflsdlfjlsdjf',()=>{
    console.log("writing done!!!");
});
let count=0;
for(let i=0;i<1000000000;i++){
    count++;
}