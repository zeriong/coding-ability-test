function solution(n) {
    let answer = [];
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1;  j < n.length; j++) {
            answer.push(n[i] * n[j]);
        }
    }
    return Math.max(...answer);
}