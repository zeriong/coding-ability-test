function solution(n) {
    var answer = [];
    
    while (n > 1) {
        if (!answer.length) answer.push(n);
        if ((n % 2) > 0) n = 3 * n + 1;
        else n = n/2;
        answer.push(n);
    }
    
    return answer;
}