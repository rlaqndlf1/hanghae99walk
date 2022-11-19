// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"


function solution(phone_number) {
  var answer = '';
  for(let i = 0; i < phone_number.length;i++){
      if(i<phone_number.length-4){/*폰넘버 길이만큼 반복문을 돌리면서 
       if문으로 한번더 걸러주면서 폰넘버길이의-4를해서 뒷자리는 예외처리
       해주고 '*'이되게하고 아닐때는 폰넘버의 i가 나오게 해서 뒷자리 4자리
       만 출력되게 하는 식이다.*/
          answer+='*'
       }else{
           answer+=phone_number[i]
       }   
}
  return answer;
}

function solution(s){
  let result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

function solution(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));