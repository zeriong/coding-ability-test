function solution(n) {
    const calc = Math.sqrt(n);
    return Number.isInteger(calc) ? (calc + 1)**2 : -1;
}