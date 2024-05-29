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


// object creation by constructor method
function Employee(id,names,salary){
    this.id=id
    this.name=names
    this.salary=salary
    this.changesalary=changesalary //assign the method in property

    function changesalary(othersalary){
        this.salary=othersalary
    }
}
const e1=new Employee(10,"loki",20000)
console.log(e1.name);
e1.changesalary(23000)
console.log(e1.salary);
