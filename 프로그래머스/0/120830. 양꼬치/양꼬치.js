function solution(n, k) {
    var answer = 0;
    const serv = parseInt(n/10)
    
    if (n <= 0 || n >= 1000) return answer;
    if (k < serv || k >= 1000) return answer;
    
    answer = [n * 12000, (k - serv) * 2000].reduce((a,b) => a+b);
    
    return answer; 
}