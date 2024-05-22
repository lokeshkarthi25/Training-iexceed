
// using ternary operator to find the largest number
function largest(x,y,z){
    let big=(x>y && x>z)?x:(y>x)&&(y>z)?y:(z>x)&&(z>y)?z:"All numbers are Equal"
    console.log(big);
}
largest(33, 5, 8)
largest(100, 1000, 200)
largest(30, 30, 30) 
