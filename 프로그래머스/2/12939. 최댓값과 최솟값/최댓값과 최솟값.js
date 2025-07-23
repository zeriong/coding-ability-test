function solution(s) {
    const a = s.split(" ").map(Number);
    return `${Math.min(...a)} ${Math.max(...a)}`;
}