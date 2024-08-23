function solution(arr, queries) {
    var answer = [];
    
    for (let i = 0; i < queries.length; i++) {
        const min = queries[i][0];
        const max = queries[i][1];
        let _arr = [];
        
        for (let j = min; j <= max; j++) {
            const num = arr[j];
            if (num > queries[i][2]) _arr.push(num);
        }
        
        if (!_arr.length) answer.push(-1);
        else answer.push(Math.min(..._arr));
        
        _arr = [];
    }
    
    return answer;
}