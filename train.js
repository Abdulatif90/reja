// call back function
console.log("Jack Ma maslahatlari:");
const list = [
    "Yaxshi talaba bo`ling !!!", // 0-20
    "To`gri boshliq tanlang !!!", // 20-30
    "O`zingizga ishlashni boshlang !!!", // 30-40
    "Siz kuchli bo`lgan narsani qiling !!!", // 40-50
    "Yoshlarga investitsiya qiling !!!", // 50-60
    "Endi dam oling !!!", // 60
    "Siz nabiralaringizga hayotlaringizni qurishga yordam bering !!!",// 70
];


function maslahatBering(a, callback){
    if (typeof a !== "number" ) callback ("insert a number", null);
    else if  (a <= 20)          callback(null,list[0]);
    else if  (a>20 && a <= 30)  callback(null,list[1]);
    else if  (a>30 && a <= 40)  callback(null,list[2]);
    else if  (a>40 && a <= 50)  callback(null,list[3]);
    else if  (a>50 && a <= 60 ) callback(null,list[4]);
    else if  (a>60 && a <= 70 ) callback(null,list[5]);
    else {
        setTimeout(function(){
             callback(null, list[6]);
        }, 3000);
    }   
}

// maslahatBering( 56 , (err, data) => {
//     if (err) console.log("ERROR:", err);
//     console.log( data)
// })


console.log("passed here 0")

maslahatBering( 75 , (err, data) => {
    if (err) console.log("ERROR:", err);
    else{
        console.log( data);
    }
});

console.log("passed here 1 ")
