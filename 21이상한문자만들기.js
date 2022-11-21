function solution(s) {
  var answer = '';
  let words = s.split(' ');
  for(let i = 0; i < words.length; i++){
      for(let j =0; j < words[i].length; j++){
          if(j%2 === 0){
              answer+= words[i][j].toLowerCase()
          }else{
              answer+= words[i][j].toLowerCase()
          }
          
      }
      if (i < words.length -1) {
          answer += ' ';
      }
  }
  return answer;
}
// toLowerCase()는 대문자로 바꾸어준다.

function toWeirdCase(s){
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}

function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}

console.log("결과 : " + toWeirdCase("try hello world"));
