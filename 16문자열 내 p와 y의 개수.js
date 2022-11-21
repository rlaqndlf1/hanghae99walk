function solution(s){
  let change = s.toLowerCase();
  let check_p= change.match(/p/g).length;
  let check_y= change.match(/y/g).length;
  
  if(check_p === check_y){
      return true;
  }else{
      return false;
  }
  
}
// toLowerCase()는 소문자로 변환해주는 역할을 하고
// match(/,/g)는 문자열 내부에서 똑같은 문자열 숫자를 세어준다.
// 그래서 문자열 숫자의 개수를 구하기위해 length를 쓰고 같으면 true 아니면 false가 나오게했다.

function solution(s){
  let change = s.toLowerCase();
  let check_p = change.split("p").length;
  let check_y = change.split("y").length;
  
  return check_p == check_y ? true : false;
}
// 비슷하지만 이게더 직관적이고 좋은거 같다.

function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") ) 
// 이거는 true false식을 안넣어도 같지 않으면  false기 때문에 이렇게 해준거같다. 기발하다
