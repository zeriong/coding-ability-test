function solution(p,m,c) {
    let remain = m;
    for (let i = 1; i <= c; i++) {
        remain -= i * p
    }
    return remain < 0 ? Math.abs(remain) : 0; 
}