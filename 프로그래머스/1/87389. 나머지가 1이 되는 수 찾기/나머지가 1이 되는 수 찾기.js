function solution(n) {
    let remain = 0;
    let count = 1;
    
    while (remain != 1) {
        count++;
        remain = n % count;
    }
    
    return count;
}