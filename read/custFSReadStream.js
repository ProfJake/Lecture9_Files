var fs  = require('fs');

var myStream = fs.createReadStream('config.txt', {encoding: 'utf8', flag: 'r'});
var dataStr = '';
myStream.on('data', (chunk)=>{
    dataStr+=chunk;
});
myStream.on('error', (err)=>{
    console.log(err);
});
myStream.on('end', ()=>
{
    console.log(dataStr);
});
