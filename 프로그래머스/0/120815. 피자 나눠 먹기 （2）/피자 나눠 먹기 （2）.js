function solution(n) {
    var answer = 0;
    var num = 1;
    var p = 6;
    
    if (n < 1 || n > 100) return answer;
    
    while(true) {
        if (num%n == 0 && num%p == 0) break;
        num++
    }
    
    answer = num/p;
    
    return answer;
} 
