function solution(operations) {
    var answer = [];
    let q = [];
    
    for (let i = 0; i < operations.length; i++) {
        let [s, n] = operations[i].split(' ');
        
        if (s == 'I') q.push(Number(n));
        else if (s == 'D' && n == '1') {
            let max = Math.max(...q);
            for (let i = 0; i < q.length; i++) {
                if (q[i] == max) q.splice(i, 1);
            }
        }
        else if (s == 'D' && n == '-1') {
            let min = Math.min(...q);
            for (let i = 0; i < q.length; i++) {
                if (q[i] == min) q.splice(i, 1);
            }
        }
    }
    
    if (q.length == 0) answer = [0, 0];
    else answer = [Math.max(...q), Math.min(...q)];
    
    return answer; 
}