function solution(x, n) {
  var answer = [];
  for (let i = 1; i<=n; i++){//i을 선언후 1을 할당하여 우리가 n개만큼 출력을 할거니 n이하로 반복하라는 뜻이며 이때 한번 반복한뒤 i는 1씩 증가
      answer.push(x*i);//push()를 알아두자
  }
  return answer;
}


function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}


// array().fill().map() 공식으로 문제를 풀었다.
const h = 10;
const w = 10;

const grid = Array(h * w).fill().map((arr, i) => {  // (arr: 현재값, i:인덱스)
    return i
})

// Array(h * w).fill()의 각 값(undefined)을 map()을 통해 하나씩 불러와서 i로 return
// map()은 각각 return한 값으로 이루어진 배열을 생성함
// 생성된 배열이 grid가 됨!!

// console.log(grid);


// [
//    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
//   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//   36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, ... 99]