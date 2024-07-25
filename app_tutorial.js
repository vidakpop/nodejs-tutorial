//console.log(__dirname);
//console.log(__filename);

//normal function statement
/*function sayHi(){
    console.log("Hi");
}
sayHi();
function callFunction(fun){
    fun();
};
//function expression
var sayBye = function(){
    console.log('bye');
};
sayBye();
callFunction(sayBye);*/

/*var stuff=require('./stuff');
console.log(stuff.counter(['shaun','crystal','ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));*/

/*var events=require('events');
var util=require('util');

var Person=function(name){
    this.name=name;

};
util.inherits(Person,events.EventEmitter);
var sharik=new Person('sharik');
var Davis=new Person('Davis');
var Donovan=new Person('Donovan');
var people=[sharik,Davis,Donovan];

people.forEach(function(person){ 
    person.on('speak',function(mssg){
        console.log(person.name +  'said:'  + mssg);
    });
}
);
sharik.emit('speak', 'hey dudes!');
Donovan.emit('speak','i want curry');*/

//reading and write files
/*var fs=require('fs');
var readme=fs.readFileSync('readme.txt','utf-8');//reading a file
fs.writeFileSync('writeme.txt',readme)//writing a file
*/
/*var fs=require('fs');
fs.readFile('readme.txt','utf-8',function(err,data){
    console.log(data);
    
});

fs.writeFile('test.txt',data);*/

var fs= require('fs');
//fs.unlink('writeme.txt',function(err){});//deleting a file
//creatind a  dir

//fs.mkdirSync('new');//adding a directory
//fs.rmdirSync('new');//removing a directory

/*fs.mkdirSync('new',function(){
    fs.readFile('readme.txt','utf-8',function(err,data){
        fs.writeFile('./new/writeme.txt',data);
    });
})*/
/*fs.unlink('./stuff/writeme.txt',function(){
    fs.rmdir('new',function(err){});

});*/

/*var http=require('http')
var fs=require('fs');




var server=http.createServer(function(req,res){

    console.log('request was made' + req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname + '/index.html', 'utf-8');
    
    
    
});
server.listen(3000,'127.0.0.1')
console.log('Yo,listening to port 3000');*/
/*var http=require('http')
var fs=require('fs');




var server=http.createServer(function(req,res){

    console.log('request was made' + req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj={
        name:'Ryu',
        job:'Ninja',
        age:29
    };
    res.end(JSON.stringify(myObj));
});
server.listen(3000,'127.0.0.1');
console.log('Yo,listening to port 3000');*/

/*var http=require('http')
var fs=require('fs');

var server=http.createServer(function(req,res){

    console.log('request was made:' + req.url);
    if(req.url==='/home' || req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url==='/contact-us'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url==='/api/ninjas'){
        var ninjas=[{name:'ryu',age:29},{name:'yoshi',age:32}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});
server.listen(3000,'127.0.0.1');
console.log('Yo,listening to port 3000');*/
