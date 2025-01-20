function solution(arr) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        
        if (!answer.length) {
            answer.push(cur);
            continue;
        }
        else {
            const last = [...answer].pop();
            
            if (last == cur) {
                answer.pop();
                continue;
            }
            else {
                answer.push(cur)
            }
        }
    }
    
    return answer.length ? answer : [-1];
}