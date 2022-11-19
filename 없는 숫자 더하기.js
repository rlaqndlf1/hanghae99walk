function solution(numbers) {
  var answer = 0;
  for(let i =0; i< 10; i++) {
      if(!numbers.includes(i)) answer+=i
  }
  return answer;
}

// 다른 풀이
// function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
// 다른 풀이 설명
// 사용된 함수
// .reduce(callback[, initialValue])
// callback
// accumulator
// currentValue
// currentIndex
// array
// 배열의 모든 값 합산
// var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0); 

// 이것은

// var total = [ 0, 1, 2, 3 ].reduce(
//   ( accumulator, currentValue ) => accumulator + currentValue,
//   0
// );

// 풀이
// .reduce 함수를 정확히 이해하지는 못했지만, 0~9까지의 합인 45에서 .reduce 함수를 적용하여 합산한 배열의 모든 값을 빼주었다.
// 천잰가?

// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }전체 합에 있는 숫자끼리 더한것을 빼주면 남은숫자끼리 더한값이 된다.