function solution(n, control) {
    const obj = { a: -10, s: -1, d: 10, w: 1 };
    for (let i = 0; i < control.length; i++) {
        const word = control[i];
        n += obj[word]
    }
    return n;
}