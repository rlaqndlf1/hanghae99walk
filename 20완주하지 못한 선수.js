function solution(participant, completion) {
  participant.sort()
  completion.sort()
  for(let i=0; i<=participant.length; i++){
      if(participant[i] !== completion[i]){
          return participant[i];
      }
  }
}

// sort로 참가자 배열정렬을 해준다음 참여자의 길이만큼 for
// 문을 돌려서 참여자i와 완주자i가 같지 않을때 해당 참여자i를 출력

function solution(participant, completion) {
  const map = new Map();

  for(let i = 0; i < participant.length; i++) {
      let a = participant[i], 
          b = completion[i];

      map.set(a, (map.get(a) || 0) + 1);
      map.set(b, (map.get(b) || 0) - 1);
  }

  for(let [k, v] of map) {
      if(v > 0) return k;
  }

  return 'nothing';
}


function solution(participant, completion) {
  var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
  return participant.find(t=> {
      if(dic[t])
          dic[t] = dic[t]-1;
      else 
          return true;
  });
}
