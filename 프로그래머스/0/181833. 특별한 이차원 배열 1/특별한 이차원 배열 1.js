function solution(n, a = []) {
    for (let i = 0; i < n; i++){
        const ar = [];
        
        for (let j = 0; j< n; j++) {
            ar.push(i==j ? 1 : 0);
        }
        
        a.push(ar);
    }
    return a;
}