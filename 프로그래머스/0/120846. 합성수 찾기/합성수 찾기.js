function solution(n) {
    var answer = 0;
    
    if (n < 1 || n > 100) return answer;
    
    
    
    for(let i = 1 ; i <= n ; i++){
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if(i % j == 0) { 
                count++
            } 
        }
        if (count > 2) {
            answer++
            count = 0;
        }
    }
    
    
    return answer;
}