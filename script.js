 // Selection
 let dec = document.querySelectorAll(".decrease")
 let inc = document.querySelectorAll(".increase")
 let quantity = document.querySelectorAll(".quant")
 let deleteBtn = document.querySelectorAll(".delete")
 let image = document.getElementsByTagName(".img")
 let price = document.querySelectorAll(".prix")
 let total = document.querySelector(".prix-total")
 let product = document.querySelectorAll(".ligne1")
 
 updateTotal()
 // Increment 
 for (let i = 0; i < inc.length; i++) {
   inc[i].addEventListener("click", incrementation) 
   function incrementation(){
     quantity[i].value++ // quantity[i].value = quantity[i].value + 1
     updateTotal()
   }
 }
 // Decrement
 for (let i = 0; i < dec.length; i++) {
   dec[i].addEventListener("click", decrementation) 
   function decrementation(){
     if (quantity[i].value > 1) {
       quantity[i].value--
       updateTotal()
     }
   }
 }
 // Calcul Total
 function updateTotal() {
   console.log(quantity)
   let totalPrice = 0
   for (let i = 0; i < quantity.length; i++) {
     totalPrice += quantity[i].value * parseInt(price[i].innerHTML)
   }
   total.innerHTML = totalPrice + " Da"
 }
 // Delete Product
 for (let i = 0; i < deleteBtn.length; i++) {
   deleteBtn[i].addEventListener("click", deletion)
   function deletion (){
     product[i].remove()
     quantity[i].value = 0
     updateTotal()
   }
 }
 // Like Product
 for (let i = 0; i < image.length; i++) {
   image[i].addEventListener("click", favoris)
   function favoris (){
     if (image[i].src == "./Image/Black-heart.svg") {
       console.log("here 1")
       image[i].setAttribute("src", "./Image/Red-heart.svg")
     } else {
       console.log("here 2")
       image[i].setAttribute("src", "./Image/Black-heart.svg")
     }
   }
 }

//toggle menu
MenuItems0.style.maxHeight = "0px";
function menutoggle(){
    if(MenuItems0.style.maxHeight == "0px")
    {
        MenuItems0.style.maxHeight = "200px";
    }
    else
    {
        MenuItems0.style.maxHeight = "0px";
    }
}

// product gallery
SmallImg[0].onclick = function()
{
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function()
{
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
    ProductImg.src = SmallImg[2].src;
}

//toggle form
function register(){
    RegForm.style.transform = "translateX(0px)"
    LoginForm.style.transform = "translateX(0px)"
    Indicator.style.transform = "translateX(100px)"
}
function login(){
    RegForm.style.transform = "translateX(300px)"
    LoginForm.style.transform = "translateX(300px)"
    Indicator.style.transform = "translateX(0px)"
}