function solution(N, number) {
    let arr = new Array(8).fill().map((_, i) => {
        return new Set([ Number(`${N}`.repeat(i + 1)) ]);
    });
    
    const calcArr = (v1, v2, i) => {
        arr[i].add(v1 + v2);
        arr[i].add(v1 - v2);
        arr[i].add(v1 * v2);
        arr[i].add(parseInt(v1 / v2));
    }
    
    for (let i = 0; i < 8; i++) { 
        for (let j = 0; j < i; j++) {
            for (let v1 of arr[j]) {
                for (let v2 of arr[i - j - 1]) {
                    calcArr(v1, v2, i);
                }
            }
        } 
        if (arr[i].has(number)) return i + 1;
    }
    
    return -1; 
}