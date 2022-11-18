function solution(s) {
  let result = ''
  if(s.length%2 === 0){
      result = s.substr((s.length/2)-1, 2)
  }else {
      result = s.substr((s.length/2), 1)
  }
  return result
}
