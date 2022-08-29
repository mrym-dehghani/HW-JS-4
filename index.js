///////////////// JS 00 ////////////////

// alert("external JS file hey!");

// const esm ="mamad";
// console.log(esm);

// let name = "";
// const inputName = prompt("enter your name");
// name = inputName;
// console.log(name);

///////////////// JS 01 ////////////////

// const userName="mamad";
// console.log(typeof userName);
// const sen=20;
// console.log(typeof sen);

// let maryamAge=null;
// const birthDay=prompt("enter your birthday");
// maryamAge=2022-birthDay;
// console.log(maryamAge);

// const secends=200;
// const minute = 200 / 60;
// console.log(minute);
// const secend =200 % 60;
// console.log(secend);

// //condition
// // if

// if (20>18){
//     console.log("x is greater than y")
// };

// // else

// let time = null;
// const vorodi=prompt("enter time");
// time=vorodi;
// if(time<12){
//     console.log("good morning.")
// }else{
//     console.log("good evening.")
// }

// // else if

// let age =null;
// const input=prompt("enter your age");
// age=input;
// if(age<10){
//     console.log("bache")
// }else if (age<20){
//     console.log("nogavan")
// }else{
//     console.log("bozorg")
// }

// // switch

// let userAge=null;
// const inputUserAge=prompt("enter your userAge");
// userAge=inputUserAge
// switch (userAge) {
//     case userAge<10:
//         console.log("bache");
//         break;
//     case userAge<20:
//         console.log("javan")    
//         break;
//     default:
//         console.log("bozorg");
//         break;
// }

// // &&  ||
// const age =false;
// const isMarried=true;

// if(age&&isMarried){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// if(age||isMarried){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// // falsy truthy
// console.log(Boolean(0));
// console.log(Boolean(1));

// //calculator

// const leftHand = +prompt("left hand number");
// const operator = prompt("operator");
// const rightHand = +prompt("right hand number");
// let result = null ;

// switch (operator) {
//     case "+":
//         result = leftHand + rightHand
//         break;
//     case "-":
//         result = leftHand - rightHand
//         break;
//     case "*":
//         result = leftHand * rightHand
//         break; 
//     case "/":
//         result = leftHand / rightHand
//         break;        
//     default:
//         result = 000
//         break;
// }

// console.log(leftHand,operator,rightHand,result);

// //function

// function sum (a=0,b=0) {
//    console.log(a+b) 
// }
// sum()
// sum(25,18)

// function plus(c=0,d=0) {
//     return c+d
// }
// const result = plus(5,8)*100
// console.log(result)

////////////////// JS 02 /////////////////

// // object

// const car={
//     name: "porsheh",
//     brand: "nissan",
//     color: "gold",
//     price: 21000,
//     safty: true,
//     beep: function(){
//         console.log("boogh");
//     },
//     move: function(){
//         console.log(this.name + "movi");
//     },
// }

// console.log(car);
// console.log(car["color"]);
// car["move"]();
// car.beep();

// // array

// const persons = ["mmd","hashi","mrym","neda"];
// console.log(persons);
// console.log(persons[1]);

// console.log(window)

// function sayMyName(name) {
//     console.log(name);
// }
// sayMyName("hisenberg");

// const name= function(name){
//     console.log(name);
// }
// name("jess pinkman");

// const esm = (eesm)=>{
//     console.log(eesm);
// }
// esm("mrym");

// const sum = (a,b) => (a+b);
// console.log(sum(7,8));

// const person ={
//     fullName: "maryam",
//     sayMyName(){
//         console.log(this.fullName);
//     }
// }
// person.sayMyName()

// const list = [10,20,30,40,50,60];
// console.log(list);

// list.pop()
// console.log(list)

// list.push(70)
// console.log(list)
 
///////////////////// JS 03 ///////////////////
// try{
//     const email = " dehghaniii "
//     email = " yasiii "
// }catch (error){
//     console.error(error);
// }

// const calculator ={
//     result:0,
//     sum (a,b){
//         return a+b ;
//     },
//     minues (a,b){
//         return a-b ;
//     },
//     multiply (a,b){
//         return a*b ;
//     },
//     kasr (a,b){
//         return a/b ;
//     },
// };
// console.log(calculator.sum(5,8));

// const calculator={
//     result:0,
//     rightHand:10,
//     leftHand:8,
//     sum(){
//         return this.rightHand + this.leftHand;
//     },
//     minues(){
//         return this.rightHand - this.leftHand;
//     },
//     multiply(){
//         return this.rightHand * this.leftHand;
//     },
//     kasr(){
//         return this.rightHand / this.leftHand;
//     },
// };
// console.log(calculator.sum())

// const calculator ={
//     result:0,
//     rightHand:100,
//     leftHand:20,
//     sum(){
//         this.result=this.leftHand+this.rightHand
//     },
//     minues(){
//          return this.rightHand - this.leftHand;
//         },
//     multiply(){
//           return this.rightHand * this.leftHand;
//        },
//     kasr(){
//             return this.rightHand / this.leftHand;
//   },
// };
// calculator.sum()
// console.log(calculator.result);

////////////////////////////// js 04 ///////////////////////////

// const users =['ali','sarah','james','john','aghdas'];

// users.forEach(function(value,index){
//     console.log(value,index)
// })

// users.forEach((value,index)=> console.log(value,index))

// console.log(users[0]+'hello');
// console.log(users[1]+'hello');
// console.log(users[2]+'hello');
// console.log(users[3]+'hello');
// console.log(users[4]+'hello');
// // or used for
// for(let i=0;i<users.length;i=i+1){
//     console.log(users[i]+'hello');
// };

// for(const iterator of users){
//     console.log(iterator);
// };

// for(const key in users){
//     console.log(key);
// };

// const obj={
//     age:30,
//     name:"aghdas",
// };
// for(const key in obj){
//     console.log(key);
// };

// for(const key in obj){
//     console.log(key,obj[key]);
// };


// let i = 0
// while (i<5) {
//     console.log(i);
//     i++
// }

// do{
//     console.log(i);
//     i++
// }while(false)

// const arr = []
// console.log(arr)

//  event
//
// const headeing = document.getElementsByTagName("h1")[0];
// headeing.addEventListener("click", function () {
//     alert("bye");
// });



