function solution(arr) {
    const len = arr.length;
    let n = 2;
    
    if (len == 1) return arr;
    
    while(n < len) n*=2;
    
    if (n == len) return arr;

    for (let i = len; i < n; i++) arr.push(0)
    
    return arr;
}