function solution(phone_book) {
    var answer = true;
    
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length; i++) {
        const num = phone_book[i];
        const next = phone_book[i + 1] || "";
        
        for (let j = 0; j < num.length; j++) {
            if (num[j] === next[j]) {
                if (j === num.length - 1) answer = false;
                continue;
            }
            break
        }
        
        if (!answer) break;
    }

    return answer; 
}