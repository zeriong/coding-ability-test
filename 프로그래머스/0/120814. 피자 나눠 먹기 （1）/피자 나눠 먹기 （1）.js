function solution(n) {
    var answer = 0;
    
    if (n<1 || n>100) return answer;
    
    answer = Math.ceil(n/7);
    
    return answer;
} 