// task -E 
function getReverse(a)  {
    if (typeof a !==String ){
        return a.toString().split("").reverse().join("");
    }};

console.log(getReverse("hello")); // javob: olleh
console.log(getReverse(1452312)); // javob: 2132541


// // call back function
// console.log("Jack Ma maslahatlari:");
// const list = [
//     "Yaxshi talaba bo`ling !!!", // 0-20
//     "To`gri boshliq tanlang !!!", // 20-30
//     "O`zingizga ishlashni boshlang !!!", // 30-40
//     "Siz kuchli bo`lgan narsani qiling !!!", // 40-50
//     "Yoshlarga investitsiya qiling !!!", // 50-60
//     "Endi dam oling !!!", // 60
// ]    

// const { name } = require("ejs");

// CallBack Fucntion

// function maslahatBering(a, callback){
//     if (typeof a !== "number" ) callback ("insert a number", null);
//     else if  (a <= 20)          callback(null,list[0]);
//     else if  (a>20 && a <= 30)  callback(null,list[1]);
//     else if  (a>30 && a <= 40)  callback(null,list[2]);
//     else if  (a>40 && a <= 50)  callback(null,list[3]);
//     else if  (a>50 && a <= 60 ) callback(null,list[4]);
//     else {
//         setTimeout(function(){
//              callback(null, list[5]);
//         }, 3000);
//     }   
// }

// // maslahatBering( 56 , (err, data) => {
// //     if (err) console.log("ERROR:", err);
// //     console.log( data)
// // })


// console.log("passed here 0")

// maslahatBering( 65 , (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else{
//         console.log( data);
//     }
// });

// console.log("passed here 1 ")




// ASYCN  funtion 


// async function maslahatBering(a){
//     if (typeof a !== "number" ) throw new Error ("insert a number");
//     else if  (a <= 20)          return list[0];
//     else if  (a>20 && a <= 30)  return list[1];
//     else if  (a>30 && a <= 40)  return list[2];
//     else if  (a>40 && a <= 50)  return list[3];
//     else if  (a>50 && a <= 60 ) return list[4];
//     else {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             },1000);
//          });
//     }
// }

// console.log("passed here 0")

// maslahatBering( 60 , (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else{
//         console.log( data);
//     }
// });

// console.log("passed here 1 ")


// THEN and CATCH

// async function maslahatBering(a){
//     if (typeof a !== "number" ) throw new Error ("insert a number");
//     else if  (a <= 20)          return list[0];
//     else if  (a>20 && a <= 30)  return list[1];
//     else if  (a>30 && a <= 40)  return list[2];
//     else if  (a>40 && a <= 50)  return list[3];
//     else if  (a>50 && a <= 60 ) return list[4];
//     else {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             },1000);
//          });
//     }
// }

// console.log("passed here 0")
// maslahatBering( 65 ) 
//     .then ((data) =>{
//         console.log(data);
//     })
//     .catch((err) =>{
//         console.log(err);
//     });
// console.log("passed here 1 ")




// ASYNC  and Await function

// async function maslahatBering(a){
//     if (typeof a !== "number" ) throw new Error ("insert a number");
//     else if  (a <= 20)          return list[0];
//     else if  (a>20 && a <= 30)  return list[1];
//     else if  (a>30 && a <= 40)  return list[2];
//     else if  (a>40 && a <= 50)  return list[3];
//     else if  (a>50 && a <= 60 ) return list[4];
//     else {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             },1000);
//          });
//     }
// }

// async function run(){
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
//     javob = await maslahatBering(35);
//     console.log(javob);
// }
// run();


// A-Task

// function countLetter(harf, soz) {
//     let a = 0;
//     for (let i = 0; i < soz.length; i++) {
//         if (soz[i] === harf) {
//             a++;
//         }
//     }
//     return a;
// }

// console.log(countLetter("e", "engineer"));



// B-Task

// function countLetter(soz) {
//     let a = 0;
//     for (let i = 0; i < soz.length; i++) {
//         if ( Number(soz[i]) >=0) {
//             a++;
//         }
//     }
//     return a;
// }

// console.log(countLetter("ad2a4y79wet0sfgb9")); // javob: 7


// Task - C

// function checkContent(a, b) {
//     if (a.length!==b.length){
//             if ([... new Set(a)].length === [...new Set(b)].length) {
//                 return true;
//             }else{
//                 return false;
//             }
//     }
//     return a.split('').sort().join('') === b.split('').sort().join('');
// }

// const x = "mitgroup";
// const y = "gmtiprou";
// console.log(checkContent(x, y)); // true 


// //  2 -sample

// const c = "international" ;
// const d  = "intretinanaol";

// console.log(checkContent(c,d)); //true



// Task - D


// class Shop {
//     constructor(name1, quantity1, name2, quantity2, name3, quantity3) {
//         this.name1 = name1;
//         this.quantity1 = quantity1;
//         this.name2 = name2;
//         this.quantity2 = quantity2;
//         this.name3 = name3;
//         this.quantity3 = quantity3;
//     }

//     qoldiq() {
//         console.log(`Hozir 20:40 da sizning do'koningizda ${this.quantity1} ta ${this.name1}, ${this.quantity2} ta ${this.name2} va ${this.quantity3} ta ${this.name3} mavjud!`);
//         return this;
//     }

//     sotish(name, quantity) {
//         if (this.name1 === name) {
//             this.quantity1 -= quantity;
//             console.log(`Siz do'koningizdan ${quantity} ta ${name} sotdingiz!`);
//         } else if (this.name2 === name) {
//             this.quantity2 -= quantity;
//             console.log(`Siz do'koningizdan ${quantity} ta ${name} sotdingiz!`);
//         } else if (this.name3 === name) {
//             this.quantity3 -= quantity;
//             console.log(`Siz do'koningizdan ${quantity} ta ${name} sotdingiz!`);
//         }
//         return this;
//     }

//     qabul(name, number) {
//         if (this.name1 === name) {
//             this.quantity1 += number;
//             console.log(`Siz do'koningizga ${number} ta ${name} qabul qildingiz!`);
//         } else if (this.name2 === name) {
//             this.quantity2 += number;
//             console.log(`Siz do'koningizga ${number} ta ${name} qabul qildingiz!`);
//         } else if (this.name3 === name) {
//             this.quantity3 += number;
//             console.log(`Siz do'koningizga ${number} ta ${name} qabul qildingiz!`);
//         }
//         return this;
//     }

//     Ohirgi_qoldiq() {
//         console.log(`Hozir 20:50 da do'koningizda ${this.quantity1} ta ${this.name1}, ${this.quantity2} ta ${this.name2} va ${this.quantity3} ta ${this.name3} mavjud!`);
//     }
// }

// const shop = new Shop("non", 4, "lagmon", 5, "cola", 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.Ohirgi_qoldiq(); 
















