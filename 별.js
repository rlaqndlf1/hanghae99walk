process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { //입력받은 숫자를 'data에 받는다'
    const n = data.split(" "); // data(입력받은 숫자)를 배열로 변경
    const a = Number(n[0]), b = Number(n[1]); //a는 한줄에대한 별의 갯수, b는 몇줄 출력
    for(i=0; i<b;i++){
        let str = ''
        for(j=0; j<a; j++){
            str= str + '*'
        }
        console.log(str)
    }
    
});

// let output=''

// for(i = 0; i <= 100; i++){
//     for(j = 0; j < i; j++){
//         output+='*'
//     }
//     output+='\n'
// }

// console.log(output)

const 입력 = Number(prompt(''))

if (입력 % 2 ===1) {
    console.log(입력)
}








