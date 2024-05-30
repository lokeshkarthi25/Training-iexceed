new Promise(function(resolve,reject){
    ispaid=true
    ispaid?resolve():reject()
}).then(()=>{
    console.log("success");
}).catch(()=>{
    console.log("failure");
})
