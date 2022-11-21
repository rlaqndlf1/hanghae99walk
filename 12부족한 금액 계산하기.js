function solution(price, money, count) {
  var answer = 0;
  for(let i =1; i <=count; i++){
      answer += price*i;
  }
  return money>answer? 0 : answer-money;
}


function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
// 가우스공식 뭐시기라는데 공식은 비슷하다.

// tmp가 변수 저장할때 쓰는 코드