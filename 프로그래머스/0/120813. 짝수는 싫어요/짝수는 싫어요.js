function solution(n) {
    var answer = [];
    
    if (n < 1 || n > 100) return answer;
    
    for (let i=1; i <= n; i++) {
        if (i%2 !== 0) {
            answer.push(i);
        }
    }
    
    return answer; 
}