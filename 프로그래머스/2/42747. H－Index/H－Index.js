function solution(citations) {
    var answer = 0;
    let len = citations.length;
    let result = new Array(len).fill(1);
    
    for (let i =0; i < len; i++) {
         for (let j = 0; j < len; j++) {
             if (j == i) continue;
             if (citations[i] <= citations[j]) result[i]++;
         }
    }
    
    let filter = result.filter((v, i) => {
        if (v > citations[i]) return;
        return v;
    });
    
    answer = Math.max(...filter);
    
    if (answer < 0) answer = 0;
    
    return answer; 
}