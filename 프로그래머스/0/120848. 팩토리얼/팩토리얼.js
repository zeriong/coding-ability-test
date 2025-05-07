function solution(n) {
    var answer = 0;
    let ans = 1;
    let arr = Array(11).fill().map((v,i)=> i+1);
    
    if (n < 1 || n > 3628800) return answer;
    
    if (n == 1) return answer = 1
    if (n == 2) return answer = 2
    
    arr.reduce((ac,v,i)=>{
        if (ac > n) {
            if (answer == 0) answer = i-1
                    }
        if (ac == n) return answer = i

        return ac * v
    },1)
    
    return answer;
} 