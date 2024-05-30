let numbers=[1,2,3,4,5,6,7,8,9]
let x=['raja','ravi','santhosh']
let mymap=new Map()
mymap.set(1,1200)
mymap.set(true,'isavailable')
console.log(mymap.get(1));
console.log(mymap.get(true));

let myset=new Set()

myset.add('java')
myset.add('javascript')
myset.add('python')
myset.add(24)

for (let i of myset) {
    console.log(i)
}
console.log(myset.has("java"));
