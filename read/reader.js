/*reader.js
A simple nodeJS file reader.
Jake Levy
Sept 2020
*/
var fs = require('fs');

var opts = {encoding:"utf8", flag: 'r'};
fs.readFile('config.txt', opts, function(err, data){

    if (err){
	console.log("Some error occurred during opening");
	throw err;
    }

    console.log("Loaded");
    var configData = JSON.parse(data);

    
    for( property in configData){
	console.log(` ${property} : ${configData[property]}`);
    }
});
