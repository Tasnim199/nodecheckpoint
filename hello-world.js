console.log("Hello world");

const { log } = require('console');
// importing the http module
const http=require('http');

// create a http server
const server=http.createServer((req,res) => {
    res.end("<h1>Hello Node!!!</h1>\n")
    
})
server.listen((3000),(err) => {
    if (err){
        console.log(err)
    }else{
    console.log("server is running")};
})
//task3 createe file 

const fs=require("fs");

fs.writeFile("welcome.txt","hello node" ,(err)=>{
if(err){
console.error(err);}
else {
console.log("file created successfully")}
})

fs.readFile("welcome.txt",'utf8',(err,data)=>{
if(err){
    console.log(err)
} else{
    console.log(data)
}})
//task4

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true,
    lowercase:false,
    symbols:true,
});
console.log(password);
//task 5 
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
 service: "gmail",
  auth: {
    user: "Tasnim.gmail.com",
    pass: "eeee"
  }
})
const optionMails={
    from:"Tasnim.gmail.com",
    to:"john.2007@gmail.com",
    subject:"mail",
    text:"hello"
} 
transporter.sendMail(optionMails, (err,res)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent successffully', res);
    }
  });
