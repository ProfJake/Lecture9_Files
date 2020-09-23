var fs = require('fs');
var readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,//use std in as this reader's input/readable stream
    output: process.stdout // std out as the reader's output/writable stream
});


var objArr = [];

function more(){
    let reusableOBJ = new Object();
	reader.question("Add another object?", resp => {
	    if (resp.toLowerCase()[0] == 'y'){
		reader.question("Name?", ans=>{
		    reusableOBJ.name = ans;
		    
		    reader.question("Occupation?", res =>{
			reusableOBJ.job = res;

			objArr.push(reusableOBJ);
			more()
		    });
		});
	    }
	    else{
		fs.open("output.txt","w", function(err, fd){

		    if (err){
			console.log(err.message);
			fs.close(fd);
		    }

		    fs.write(fd, JSON.stringify(objArr),  (err, written, string) =>{
			if (err){
			    console.log(err.message);
			}else{
			    console.log("No errors writing");
			}
		    });
		    fs.close(fd,  (err) =>{
			    if (err){
				console.log(err.message);
			    }else{
				console.log("No errors closing");
			    }
		    });

		});
	    }
	});
}
/*
fs.write(fd, JSON.stringify(someOBJ),  (err, written, string) =>{
	    if (err){
		console.log(err.message);
	    }else{
		console.log("No errors writing");
	    }
	});
	

function start(){
    fs.open("output.txt","w", function(err, fd){
	
	if (err){
	    console.log(err.message);
	    fs.close(fd);
	}
	
	
	more(fd);


*/
function start(){
    let firstOBJ = new Object();
    console.log("Enter series of names and occupations");
    reader.question("What is the first name?", name => {
	firstOBJ.name = name;

	reader.question( "What is their occupation?", job => {
	    firstOBJ.job = job;

	    objArr.push(firstOBJ);

	    more();
	});
    });
}

start();
