/*
    Using Async Await(promises module)
*/
const fs = require("fs").promises;

async function processFile(filePath) {
  try {
    // Read the file
    const data = await fs.readFile(filePath, "utf-8");
    const cleanedData = data.replace(/\s+/g, " ");
  } catch (err) {
    console.error("Error processing the file:", err);
  }
  try {
    await fs.writeFile(filePath, cleanedData, "utf-8");
  } catch (err) {
    console.error("Error writing the file:", err);
  }
  console.log("File processed successfully.");
}


const filePath = "temp.txt";
processFile(filePath);

/*
    Without using promises module
*/
// const fs=require('fs')
// function returnReadPromise(){
//     return new Promise((resolve,reject)=>{
//         console.log(typeof fs.readFile('temp.txt','utf-8',(err,data)=>{
//             if(err){
//                 reject("unable to read data");
//             }else{
//                 data=data.trim();
//                 resolve(data);
//             }
//         }))
//     })
// }
// async function processFile(){
//     let data= await returnReadPromise();
//     const cleanedData = data.replace(/\s+/g, ' ');
//     fs.writeFile('temp.txt',cleanedData,()=>console.log("writing done!!!"));
//     //
// }
// processFile();


