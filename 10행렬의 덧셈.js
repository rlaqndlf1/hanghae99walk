function solution(arr1, arr2) {
  let answer = [];
  for(let i = 0; i < arr1.length; i++){
   let sum = [];
      for(let j =0; j < arr1[i].length; j++){
          sum.push(arr1[i][j]+arr2[i][j]);         
                                                              //  arr1.push()를 사용하게 되면 배열의 끝에 생성 하기때문에 순서대로 
                                                              //  돌릴때마다 배열의 끝에 자리잡게 된다.   
                                                              //  1[[1,2],[2,3]]	2[[3,4],[5,6]]	=[[4,6],[7,9]]
                                                              //  1[[1],[2]]	2[[3],[4]]	=[[4],[6]]
      }
      answer.push(sum)
  }
  return answer;
}



function sumMatrix(A,B){
  var answer = Array();
      for(var i = 0; i < A.length; i++){
    answer[i] = []; 
    for(var j = 0; j < A[i].length; j++){
        answer[i][j] = A[i][j] + B[i][j];             
    }
      }
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))


function solution(A, B) {
    
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}