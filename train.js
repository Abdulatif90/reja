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

function countLetter(harf, soz) {
    let a = 0;
    for (let i = 0; i < soz.length; i++) {
        if (soz[i] === harf) {
            a++;
        }
    }
    return a;
}

console.log(countLetter("e", "engineer"));
