//input 상자 접근
let uId = document.querySelector("#user-id");
let uPw = document.querySelector("#user-pw1");
let uPwc = document.querySelector("#user-pw2");

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
uId.onchange = idCheck;
uPw.onchange = pwCheck;
uPwc.onchange = pwCompare;

// id 길이 체크
function idCheck() {
   let idl = uId.value.length;
   if(idl < 3 || idl > 10) {
      Swal.fire({
         text: "아이디의 길이는 3 ~ 10 글자 입니다.",
         icon: "error"
      });
      uId.select();
   }
}

//비밀번호 길이 체크
function pwCheck() {
   let pwl = uPw.value.length;
   if(pwl < 4 ) {
      Swal.fire({
         text: "비밀번호는 4글자 이상입니다.",
         icon: "error"
      });
      uPw.value = '';
      uPw.focus();
   }
}


// 비밀번호가 맞는지 확인
function pwCompare() {
   if(uPw.value != uPwc.value) {
      Swal.fire({
         text: "비밀번호 불일치",
         icon: "error"
      });
      uPwc.value = "";
      uPwc.focus();
   }
}