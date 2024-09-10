// 입력상자와 버튼에 접근
let input = document.querySelector("#book");
let addBtn = document.querySelector("#add");
let listDiv = document.querySelector("#bookList");

// 도서 목록 저장 배열 생성
let books = [];

// 추가 버튼에 클릭 이벤트 연결
addBtn.onclick = addFunc;

// 배열에 도서 목록 추가
function addFunc() {
   if(input.value == "") {
      alert("책 제목을 입력하세요")
   } else {
      if(books.indexOf(input.value) != -1) {
         alert("이미 존재함");
         input.value = "";
         input.focus();
      } else {
         books.push(input.value);
         input.value = "";
         input.focus();
         show();
      }
   }
   
}
// 문서에 도서목록 출력(<ul><li>)
function show() {
   let list = "<ul>";
   for(let idx in books) {
      list += `<li>${books[idx]}
                  <span class="del" id=${idx}>삭제</span>
               </li>`
   }
   list += "</ul>";
   listDiv.innerHTML = list;
   
   // 문서에 도서 목록 삭제
   let dlist = document.querySelectorAll(".del");
   for(let ele of dlist) {
      ele.onclick = remove;
   }
}

function remove() {
   let dno = this.getAttribute("id");
   books.splice(dno, 1);
   show();
}


