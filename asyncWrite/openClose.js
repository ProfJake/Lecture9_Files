var fs = require('fs');

fs.open("example", 'w+', (err, fd) =>{

    if (err){
	console.log(err.message);
	fs.close(fd)//uses the passed file descriptor to close
    }
    var test ="this is a test example!!";
    console.log("No errors opening the example file");


    fs.write(fd, test, (err, written, string) =>{
	if (err){
	    console.log(err.message);
	}else{
	    console.log("No errors writing");
	}
    });

    //There's a limit
    fs.close(fd, (err) =>{
	if (err){
	    console.log(err.message);
	}else{
	    console.log("No errors closing the file");
	}
    }); //always close when done to flush file contents
});
