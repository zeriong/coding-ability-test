function solution(a, b) {
    if (a == b) return a;
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const spreadArr = Array.from({ length: max - min }, (_, i) => min + i);
    return spreadArr.reduce((a,v) => a + v) + max;
}