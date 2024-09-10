let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");

let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#sub");
let multBtn = document.querySelector("#multy");
let divBtn = document.querySelector("#divid");

// 이벤트 걸기

addBtn.onclick = addFunc;
subBtn.onclick = subFunc;
multBtn.onclick = multFunc;
divBtn.onclick = divFunc;


   function addFunc() {
      result.value = Number(num1.value) + Number(num2.value); 
   }
   function subFunc() {
      result.value = Number(num1.value) - Number(num2.value); 
   }
   function multFunc() {
      result.value = Number(num1.value) * Number(num2.value); 
   }
   function divFunc() {
      result.value = Number(num1.value) / Number(num2.value); 
   }

