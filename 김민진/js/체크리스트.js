let input = document.querySelector("#item");
let addBtn = document.querySelector("#add");
let itemList = document.querySelector("#itemList")

let travelLists = [];

addBtn.onclick = addFunc;

function addFunc() {
   if(input.value == "") {
      alert("여행 준비물을 입력하세요")
      input.focus();
   } else {
      if(travelLists.indexOf(input.value) != -1) {
         alert(`${input.value}가 이미 존재합니다.`);
         input.value = "";
         input.focus();
      } else {
         travelLists.push(input.value);
         input.value = "";
         input.focus();
         show();
      }
   }
}

function show() {
   let list = "<ul>"
   for(let idx in travelLists) {
      list += `<li>${travelLists[idx]}
                  <span class="close" id="${idx}">X</span>
               </li>`
   }
   list += "</ul>"
   itemList.innerHTML = list;

   let deleteLi = document.querySelectorAll(".close");
   for(let ele of deleteLi) {
      ele.onclick = remove;
   }
}
let closeBtn = document.querySelector(".close");

function remove() {
   let dno = this.getAttribute("id");
   travelLists.splice(dno, 1);
   show();
}
