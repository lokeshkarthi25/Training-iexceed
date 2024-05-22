//rest operators
const myName = "Oluwatobi Sofela";//return each letters as a separate element in an array

console.log([...myName]);


function mydata(...args){
    console.log(args.filter(x =>x+2==5));//return [3]
    console.log(args.filter(x =>x%2==0));//return [2,4]

}
mydata(2,3,4,1)
