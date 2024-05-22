//arrow function
// sum of square of positive number
const sumofpositive=(arr)=>{
        let newarr= arr.filter(sum=>sum>0);
        let arr1=  newarr.map(sumarr=>sumarr**2);
        let sum=0;
        for(let i=0;i<arr1.length;i++){
            sum+=arr1[i]
        }
        return sum
        
}
console.log(sumofpositive([-3, 5, -2, 7, 1]));//return 75
