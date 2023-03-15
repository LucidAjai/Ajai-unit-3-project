/* Declare variables below to save the different sections (divs) of your story*/


let openingButtonOne = document.querySelector(".option-one");
let openingButtonTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");









openingButtonOne.onclick=function(){
 optionOneScreen.style.display="block";
};

openingButtonTwo.onclick=function(){
 optionTwoScreen.style.display="block";
};

 optionOneScreen .onclick=function(){
optionOneEnd.style.display="block";
};


 optionTwoScreen .onclick=function(){
optionTwoEnd.style.display="block";
 };
