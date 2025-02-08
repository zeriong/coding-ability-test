function solution(a, b) {
    const returnIsOdd = (target) => {
        return target % 2 > 0
    }
    
    const _a = returnIsOdd(a);
    const _b = returnIsOdd(b);
    
    if (_a && _b) return a**2 + b**2;
    if (_a || _b) return 2 * (a + b);
    if (!_a && !_b) return Math.abs(a-b);
}