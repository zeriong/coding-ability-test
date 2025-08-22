function solution(s) {
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        let item = "";
        
        if (!isNaN(cur)) {
            let next = true;
            let j = i;
            
            while (next) {
                const _cur = s[j];
                
                if (isNaN(_cur)) {
                    i = j;
                    next = false;
                } else {
                    j++;
                    item += _cur;
                }
            }
        }
        answer += +item;
    }
    
    return answer;
} 