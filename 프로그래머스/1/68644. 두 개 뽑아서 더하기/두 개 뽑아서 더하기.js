function solution(numbers, arr=[]) {
    const len = numbers.length;
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            const calc = numbers[i] + numbers[j]
            arr.push(calc);
        }
    }
    return [...new Set(arr)].sort((a,b) => a-b);
}