function solution(numbers) {
    var answer = '';
    let arr = numbers.map(String)
    
    answer = arr.sort((a, b) => {
        if (a + b < b + a) return 1;
        if (a + b > b + a) return -1;
        if (a + b == b + a) return 0;
    }).join('');
    
    if (Number(answer) == 0) answer = '0';
    
    return answer; 
}