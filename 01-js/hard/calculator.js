/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  add(x){
    this.result+=x;
  }
  subtract(x){
    this.result-=x;
  }
  multiply(x){
    this.result*=x;
  }
  divide(x){
    if(x===0)throw new Error("division by zero is not possible");
    this.result/=x;
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  evalu(arr){
    return eval(arr);
  }
  evalu_arr(arr){
    let res=0;
    let nxt=[];
    let i=1;
    let dont_add=false;
    for(;i<arr.length;i+=2){
      if(arr[i]==='*'){
        if(nxt.length===0 || typeof nxt[nxt.length-1]!=='number'){
          nxt.push(arr[i-1]*arr[i+1]);
          if(i+1===arr.length-1){
            dont_add=true;
          }          
        }else{
          nxt[nxt.length-1]*=arr[i+1];
        }
      }else if(arr[i]==='/'){
        if(nxt.length===0 || typeof nxt[nxt.fill]!=='number'){
          if(arr[i+1]===0)throw new Error("Div by zero error");
            nxt.push(arr[i-1]/arr[i+1]);
            if(i+1===arr.length-1){
              dont_add=true;
            }
        }else{
          nxt[nxt.length-1]/=arr[i+1];
        }
      }else{
        if(i===1 || typeof nxt[nxt.length-1]!=='number')
          nxt.push(arr[i-1]);
        nxt.push(arr[i]);
      }
    }
    if(!dont_add){
      nxt.push(arr[i-1]);
    }
    res+=nxt[0];
    for(let i=1;i<nxt.length;i+=2){
      res+=(nxt[i]==='+'?1:-1)*nxt[i+1];
    }
    return res;
  }
  calculate(s){
    s=s.replace(/\s/g, '');
    let st=[];
    let operators='+-*/';
    for(let i=0;i<s.length;i++){
      if(operators.includes(s[i])){
        if(st.length===0 || typeof st[st.length-1]!=='number'){
          throw new Error(`No number before operator at ${i}`);
        }
        st.push(s[i]);
      }else if(s[i]==='('){
        let before=st[st.length-1];
        if(st.length===0 || before==='(' ||operators.indexOf(before)!==-1){
          st.push('(');
        }else{
          throw new Error(`Invalid operand\operator before ( at ${i}`);
        }
      }else if(s[i]===')'){
        if(st.length===0 || typeof st[st.length-1]!=='number'){
          throw new Error(`Invalid operand\operator before ) at ${i}`);
        }else{
          let res="";
          let arr=[];
          while(st.length!==0 && st[st.length-1]!=='('){
            let c=st.pop();
            res=String(c)+res;
            arr.unshift(c);
          }
          if(st.length===0){
            throw new Error(`No closing bracket for ) ${i}`);
          }
          st.pop();
          let final=this.evalu_arr(arr);
          if(final===NaN){
            throw new Error( `calcu error at ${arr}`);
          }
          st.push(final);
        }
      }else if(s[i]>='0' && s[i]<='9'){
        let before=st[st.length-1];
          if(st.length===0 || (st[st.length-1]==='(' ||operators.indexOf(before)!==-1)){
            let regex=/\d+(\.\d+)?/g
            regex.lastIndex=i;
            let match;
            if(match=regex.exec(s)){
              let x=match[0];
              if(parseFloat(x)===0 && st[st.length-1]==='/')
                throw new Error("division by zero error");
              st.push(parseFloat(x));
              i+=x.length;i--;
              continue;
            }else{
              throw new Error("This  is not a number")
            }
          }else{
            throw new Error(`invalid operand present before number ${i}`);
          }
      }else{
        throw new Error(`Invalid operand at ${i}`);
      }
    }
    let res="",arr=[];
    while(st.length!==0){
      let poppedValue = st.pop();
      if (true) {
          if(typeof poppedValue!=='number' && operators.indexOf(poppedValue)===-1){
            throw new Error(`parsing error ${poppedValue} typeof ${typeof poppedValue}`);
          }
          res = String(poppedValue) + res;
          arr.unshift(poppedValue);
      }
    }
    this.result=this.evalu_arr(arr);
  }
}
let temp=new Calculator();
temp.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7');
module.exports = Calculator;
