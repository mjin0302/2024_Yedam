// 1. 아이디
let uId = document.querySelector("#user-id");

uId.onchange = idChkFunc;

function idChkFunc() {
   let uIdChk = uId.value.length;
   if(uIdChk < 4 || uIdChk > 16) {
      alert("4글자 이상 15글자 이하로 입력하세요")
      uId.select();
   }
}

// 2. 비밀번호
let uPass = document.querySelector("#user-pw1");

uPass.onchange = passChkFunc;

function passChkFunc() {
   let uPassValue = uPass.value.length;
   if(uPassValue < 8) {
      alert("8자리 이상 입력하세요");
      uPass.value = "";
      uPass.focus();
   } 
}

// 3. 비밀번호 확인
let uPassChk = document.querySelector("#user-pw2");

uPassChk.onchange = passCompareFunc;

function passCompareFunc() {
   if(uPass.value != uPassChk.value) {
      alert("비밀번호를 다시 확인하세요")
      uPassChk.value = "";
      uPassChk.focus();
   }
}
