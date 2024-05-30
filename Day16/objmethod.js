function student(name,clg,age){
    this.name=name
    this.clg=clg
    this.age=age
}
student.prototype.display=function(){
    return `${this.name}`
}
s2=new student("karthi","xaver",21)
let x=Object.getPrototypeOf(student)
console.log(x);
console.log(s2.display());
