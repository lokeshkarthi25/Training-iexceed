// can we change the values of global variable inside the block scope ?

var x=30
console.log(x); //var is used before ES6

let y=40 //ES6 feature to define type of variable
const z=54 //ES6 feature to define type of variable

function start(){
    x=34
    console.log(x); //we can redefine the var values in the function
}
start()

function first(){
    y=20
    console.log(y); //we can also redefine the let variables also
}
first()

function second(){
    z=45
    console.log(z);// we can't redefine the const variables inside the scope 
}
second()

