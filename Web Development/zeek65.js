//Synchronous (or blocking) execution means the first task in a program must finish processing before moving on to executing the next task
//line by line execution.

//Asynchronous (or non-blocking) execution means a second task can begin executing in parallel, without waiting for an earlier task to finish.
//line by line execution not guranteed.
// callbacks will fire;

const fs = require("fs");
let text = fs.readFile("zeek.txt","utf8",(err,data)=>{
    console.log(data);
});


console.log("This is a message");

//In terminal "This is a message"  is written first but it comes later in console.log that means readFile is asynchronous but readFileSync is Synchronous means follow line by line execution
