console.log("Web Serverni boshlash");
const express = require("express");  // Express kutubxonasini chaqirish, serverni yaratish uchun ishlatiladi, Express- serverni yaratish uchun ishlatiladi.
const app = express();  //app - serverni yaratish uchun ishlatiladi
const http = require("http");  // http- serverni yaratish uchun ishlatiladi.
const fs = require("fs"); // fs- fayllarni yaratish, o'qish va yozish uchun ishlatiladi.

let user;
// user.json faylini o'qish
// fs.readFile- faylni o'qish uchun ishlatiladi.
// "database/user.json"- fayl nomi
// "utf8"- faylning kodirovkasi
// (err, data)- xatolik va ma'lumotlar, agar xatolik bo'lsa "ERROR:", err chiqadi, aks holda user= JSON.parse(data) chiqadi.
// JSON.parse(data)- JSON ma'lumotlarini o'qish, parse- JSON ma'lumotlarini o'qish uchun ishlatiladi.

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

// connecting MongoDB
const db =require("./server").db();
const mongodb = require("mongodb");


// 1: Kirish code
// Static fayllar - Express serveriga public papkani ulash uchun ishlatiladi. Public- fayllarni serverga ulash uchun ishlatiladi.
// JSON fayllar - Express serveriga JSON fayllarni ulash uchun ishlatiladi.
// Views - Express serveriga views papkani ulash uchun ishlatiladi.
// Routing - Express serveriga routing qilish uchun ishlatiladi.
//urlencoded- Express serveriga urlencoded ma'lumotlarni ulash uchun ishlatiladi. urlcoded bu ma'lumotlarni kodlash uchun ishlatiladi.


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code
// 3: Views code

// app.set- Express serveriga papka va fayllarni ulash uchun ishlatiladi.
// set() - Express serveriga papka va fayllarni ulash uchun ishlatiladi. 1 - papka nomi, 2 - papka manzili, 3 - fayl nomi, 4 - fayl manzili.
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

//post- Express serveriga post ma'lumotlarni ulash uchun ishlatiladi. req- ma'lumotlarni olish uchun ishlatiladi, res- ma'lumotlarni yuborish uchun ishlatiladi.
// req.body- ma'lumotlarni olish uchun ishlatiladi.
// insertOne- ma'lumotlarni yuborish uchun ishlatiladi.
 

  app.post("/create-item", (req, res) => {
    console.log(req.body);
    const new_reja=req.body.reja;
    db.collection("plans").insertOne({reja:new_reja},(err,data)=>{
      res.json(data.ops[0]);
    });
  });

  app.post("/delete-item", (req , res) =>  {
    const id = req.body.id;
    db.collection("plans").deleteOne(
      {_id: new mongodb.ObjectId(id)},
      function ( err , data ) {
        res.json({state: "success"});
      }
    );
  });

  app.post("/edit-item", (req, res) => {
    const data = req.body; 
    db.collection("plans").findOneAndUpdate(
      {_id: new mongodb.ObjectId(data.id)},
      {$set: {reja: data.text}},
      function (err, data) {  
        res.json({state: "Updated Successfully"});
      }
    )});

  app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
    db.collection("plans").deleteMany({}, (err, data) => {
       res.json({state: "All plans are deleted"});
      });
    };
  }
  );


  app.get("/", function (req, res) {
    db.collection("plans")
    .find()
    .toArray((err,data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        // render  - 
        res.render("reja", {items: data});
      }
    });
  });

  module.exports = app;
 