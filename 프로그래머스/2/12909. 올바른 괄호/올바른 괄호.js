function solution(s){
    let cnt = 0;

    for(let i = 0; i < s.length; i++) {
        const cur = s[i]
        if (cur == "(") cnt++;
        if (cur == ")") cnt--;
        if (cnt < 0) return false
    }
    
    return cnt == 0;
}