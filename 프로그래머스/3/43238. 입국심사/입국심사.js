function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let people = 0;
        
        for (let t of times) people += parseInt(mid / t);
        if (left == right) console.log(mid, people, n)
        console.log(mid)
        
        if (people < n) left = ++mid;
        else right = --mid;
    }
    
    return left; 
}