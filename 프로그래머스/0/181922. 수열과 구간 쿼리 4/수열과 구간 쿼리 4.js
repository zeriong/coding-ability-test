function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        const s = queries[i][0];
        const e = queries[i][1];
        const k = queries[i][2];
        
        for (let j = s; j <= e; j++) {
            const jk = j * k;
            if (jk == 0 || j % k == 0) arr[j]++;
        }
    }

    return arr; 
}