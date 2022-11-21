function solution(a, b) {
  var answer = 0;
  for(let i = 0; i < a.length; i ++){
      answer += a[i]*b[i];
  }
  return answer;
}

function solution(a, b) {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

function solution(a, b) {
  return a.map((v,i,arr) => v*b[i]).reduce((ac,cr) => ac + cr ,0);
}

function solution(a, b) {
  return a.reduce((s,v,i) => s + v*b[i],0);
}

function solution(a, b) {
  var sum = 0;
  for(var i=0; i<a.length; i++){
      sum += a[i]*b[i];
  }
  return sum;
}