/*synchWrite.js
a file to demonstrat
*/var fs = require('fs');

function funct(){
    console.log("Funct called!");
}
console.log("Begin Writing file");
fs.writeFileSync('./writeSync', "Though easy to reason about, synchronous \
 writing is usually not a good choice because nothing else can happen \
until it completes", {encoding: 'utf8'});
funct();
console.log("completed");
