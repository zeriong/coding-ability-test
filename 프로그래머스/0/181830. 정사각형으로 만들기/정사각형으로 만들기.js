function solution(arr) {
    const a = arr.length;
    const b = arr[0].length;
    
    if (a == b) return arr;
    if (a > b) return arr.map(v => [...v, ...Array(a-b).fill(0)]);
    return Array.from({ length: b }, (_, i) => arr[i] || Array(b).fill(0));
}