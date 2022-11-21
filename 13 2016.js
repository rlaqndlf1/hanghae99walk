function solution(a, b) {
  // week라는 변수에 일요일부터 토요일까지의 요일을 넣어준다.
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
 
  // ``을 사용하게 되면 ${ } 사이에 변수나 연산 등을 삽입할 수 있게 된다.
  let date = new Date(`2016-${a}-${b}`);

// getDay()함수는 날짜의 요일을 받아오는 함수로 일요일부터 토요일까지 0부터 6을 반환
  let day = date.getDay();
  
  // 최종 결과는 week의 [i]번째 인덱스를 리턴
  return week[day];
}

function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));


function solution(a, b) {
  var answer = '';
  let days= ['THU','FRI','SAT','SUN','MON','TUE','WED'];
  let months = {
      29:[2],
      30:[4,6,9,11],
      31:[1,3,5,7,8,10,12]
  }
  let sum = 0;
  for (let key in months){
    months[key].forEach(el => {
        if (el < a){
          sum = sum + Number(key);
        }
    })       
  }
    let checkedNum = (sum+b)%7;
      answer = days[checkedNum]   
  return answer;
}