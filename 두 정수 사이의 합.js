function solution(a, b) {
    var answer = 0;
    let smalla = Math.min(a)
    let smallb = Math.min(b)
    let biga = Math.max(a)
    let bigb = Math.max(b)
    if(a < b){
        for(let i = smalla; i <= bigb; i++){
            answer+=i;
        }
        return answer;
    }else if(a === b){
        return a
    }else if(b < a) {
        for(let i = smallb; i <= biga; i++){
            answer+=i;
        }
        return answer;
    }
}

// let a = [3, 3, 5];
// let b = [5, 3, 3];

// function solution(a, b) {

//     var answer = 0;

//         if(a < b){
//             for(let j=a; j<=b; j++){
//                 answer += j;
//             }
//         }
//         else if(a > b){
//             for(let j=b; j<=a; j++){
//                 answer += j;
//             }
//         } 
//         else if(a==b){
//             answer=a;
//         }
//         return answer;
// }

// function solution(a, b) {
//     if(a===b) return a;
//     let small = a < b ? a : b;
//     let big = a > b ? a : b;
//     for(let i = small+1; i < big+1; i++) 
//         small += i;
//     return small;
// }