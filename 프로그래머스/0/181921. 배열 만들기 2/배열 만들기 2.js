function solution(l, r) {
    var answer = [];
    
    for (let i = l; i <= r; i++) {
        const splitArr = String(i).split('');
        let filtered = [];
        
        for (let j = 0; j < splitArr.length; j++) {
            filtered = splitArr.filter(item => item.includes("5") || item.includes("0"));
        }
        
        if (filtered.length == splitArr.length) answer.push(i);
    }
    
    return answer.length ? answer : [-1]; 
}