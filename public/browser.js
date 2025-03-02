
console.log("Browser ishga tushdi");
// itemTemplate- serverdan kelgan ma'lumotlarni ko'rsatish uchun ishlatiladi.
// item- serverdan kelgan ma'lumotlarni o'z ichiga oladi.
// item.reja- serverdan kelgan ma'lumotlarni o'z ichiga oladi.
// item._id- serverdan kelgan ma'lumotlarni o'z ichiga oladi.
   
function itemTemplate(item){
    return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div>
            <button 
            data-id="${item._id}"
             class="edit-me btn btn-secondary btn-sm mr-1">
              O'zgartirish
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
          </div>
          </li> `;
}

let createField= document.getElementById("create-field"); // create-field- inputni id sini olish.

document.getElementById("create-form").addEventListener("submit", function(e){
	e.preventDefault(); // submitni o'chirish uchun preventDefault() funksiyasini chaqirish, yani boshqa sahifaga o'tmaslik uchun ishlatiladi.
   
    axios
        .post("/create-item", { reja: createField.value })  // create-item- serverdagi route nomi, {reja: createField.value}- serverga yuboriladigan ma'lumot
        .then((response) => {
            console.log(response); // response- serverdan kelgan javobni ko'rsatadi
            console.log(createField);   // createField- inputdagi qiymatni ko'rsatadi
            document.getElementById("item-list")    // item-list- itemlarni ko'rsatish uchun ishlatiladi
            .insertAdjacentHTML("beforeend", itemTemplate(response.data));  // itemTemplate funksiyasini chaqirish, response.data ni o'z ichiga oladi. beforeend- item-listning oxiriga qo'shish
        createField.value="";  // qiymat kiritgandan keyin inputdagi yozuv, bo`sh qilish uchun ishlatiladi. Agar ""  ichiga qiymat yozilsa, inputni qiymati bo`sh qilinadi.
        createField.focus();  // inputga fokuslanish uchun ishlatiladi.   
    })
        .catch((err)=>{
            console.log("Iltimos qaytadan haratkat qiling!!!");
    });
});

 

document.addEventListener("click", function(e){
    //delete 
    console.log(e);

    // e.target- bosilgan elementni ko'rsatadi, classList - elementning classlarini ko'rsatadi, contains- elementda class bor yoki yo'qligini tekshiradi, delete-me- class nomi
    //confirmni o'chirish- pageda o'chirishni tasdiqlash ko`rsatiilmasligi uchun ishlatiladi.
    if(e.target.classList.contains("delete-me")){    
         if (confirm) {  
            axios
            .post("/delete-item", { id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan kiriting!!!")
            });
        }
    }



// edit operation

    // edit-me- class nomi
    // prompt- o'zgartirish uchun ishlatiladi va foydalanuvchidan qiymat kiritishni so'raydi. 
    //getAttribute- elementning attributini olish uchun ishlatiladi.
    //innerText- elementning matnini olish uchun ishlatiladi. 


    if(e.target.classList.contains("edit-me")){
        let userInput = prompt("o'zgartirish  kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if(userInput){
            axios
            .post("/edit-item", { text: userInput, id: e.target.getAttribute("data-id")})
            .then(() => {
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch(() => {
                console.log("Iltimos qaytadan harakat qiling!!!");
            });
        }
    }
});

// delete all
// clean-all- class nomi
// addEventListener- elementga hodisani qo'shish uchun ishlatiladi.
// axios- serverga ma'lumot yuborish uchun ishlatiladi.
// post- serverga ma'lumot yuborish uchun ishlatiladi.
// delete-all- serverdagi route nomi
// delete_all- serverga yuboriladigan ma'lumot 
// then- serverdan kelgan javobni ko'rsatish uchun ishlatiladi.
// alert- xabarni ko'rsatish uchun ishlatiladi.
// document.location.reload()- sahifani qayta yuklash uchun ishlatiladi.
    

document.getElementById("clean-all").addEventListener("click", function(){
    axios
    .post("/delete-all",{delete_all: true})
    .then((response) => {
        // alert(response.data.state);
        document.location.reload();
    });
}); 
 


