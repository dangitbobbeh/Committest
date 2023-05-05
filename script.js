let name= "David"
let buttonOne = document.querySelector(".option-one")
let optionOneScreen = document.querySelector(".option-one-screen")
let buttonTwo = document.querySelector(".option-two")
let optionTwoScreen = document.querySelector(".option-two-screen")

let keyImage = document.querySelector(".key-img")
let keyText1 = document.querySelector(".option-key-1-screen")
let keyText2 = document.querySelector(".option-key-2-screen")

buttonOne.onclick=function(){
    optionOneScreen.style.display="block";
};

buttonTwo.onclick=function(){
optionTwoScreen.style.display="block"
}

keyImage.onclick=function(){
  keyText1.style.display="block"
}

keyText1.onclick=function(){
  keyText2.style.display="block"
}