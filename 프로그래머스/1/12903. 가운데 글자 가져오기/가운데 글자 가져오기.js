function solution(s) {
    const len = s.length;
    const half = Math.floor(len/2);
    return len%2 != 0 ? s[half] : s[half - 1] + s[half];
}