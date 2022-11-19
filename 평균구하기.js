function solution(arr) {
  let answer = 0; 
  for(let i = 0; i< arr.length; i++){ /*자료값의 총합array총합/자료값의 개수 arr.length를 의미*/
      answer+=arr[i]; /* 배열은[i]를 기입해줘야 식이 굴러감*/
  }
  return answer/arr.length;
}