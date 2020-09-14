/*asyncWrite.js
Jake Levy
Sept 2020
Demonstrates asynchronous file writing.
*/
var fs = require("fs");


console.log("Beginning Asynchronous Write");
fs.writeFile("./asyncWrite", "Asynchronous writing is usually better because you often don't need the contents of the file in the current thread and sync Writing blocks execution", {encoding:'utf8'}, (err) =>{
    if (err){
	console.log(err.message);
    }
    console.log("Completed");
});
console.log("This is after fileWrite begins. More stuff can be done that has nothing \nto do with the File Writing");
