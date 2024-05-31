let y =0;

let x=setInterval(()=>{
   y+=2;
   console.log(y)
   if(a==5){
     clearInterval(x)
   }
},2000) //this interval doesn't stop because the condition is not satisfied
