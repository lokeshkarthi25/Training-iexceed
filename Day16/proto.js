let parent={
    calculateAge:function(dob){
        console.log(new Date().getFullYear()-dob);
    }
}
let child={
    name:"loki",
    __proto__:parent,
    displayname:function(name){
        
        console.log(`I'm ${name}`);
    }
}
child.displayname("loki")
child.calculateAge(2002)
