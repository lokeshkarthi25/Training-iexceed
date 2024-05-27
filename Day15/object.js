let obj1={
    bat:"sg",
    ball:"kokubura",
    players:11,
    win:true
}
console.log(obj1.win);//object literals

obj2=new Object()
obj2.country="Australia"
obj2.Pname="maxwell"
obj2.trophy=6

console.log(obj2.trophy);//object created instance

let student={
    dob:2002,
    calculateAge(){
        console.log(new Date().getFullYear()-this.dob);
    }
}
let student1=student
student=null
student1.calculateAge()
