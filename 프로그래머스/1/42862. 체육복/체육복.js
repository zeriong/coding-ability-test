function solution(n, lost, reserve) {
    var answer = n - lost.length;
    
    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] == reserve[j]) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
                answer++;
                j--;
                i--;
            }
        }
    }
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    for (let v of lost) {
        let next = v + 1;
        let prev = v - 1;
        
        if (reserve.length == 0) break;
        
        for (let i = 0; i < reserve.length; i++) {
            let val = reserve[i];
            if (val == next || val == prev) {
                reserve.splice(i, 1);
                answer++;
                break;
            }
        }
    }
    
    return answer; 
}