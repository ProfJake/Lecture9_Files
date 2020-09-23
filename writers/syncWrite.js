var fs = require('fs');


console.log("Begin Writing file");
fs.writeFileSync('./writeSync', "Though easy to reason about, synchronous writing is usually not a good choice", {encoding: 'utf8'});

console.log("completed");
