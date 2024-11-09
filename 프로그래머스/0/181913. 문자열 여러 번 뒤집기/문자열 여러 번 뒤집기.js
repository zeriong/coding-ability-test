function solution(str,qs) {
    const arr = [...str]
    while(qs.length) {
        const [s, e] = qs.shift();
        const slice = arr.slice(s, (e + 1)).reverse();
        const str = arr.splice(s, (e - s + 1), ...slice);
    }
    return arr.join("");
}