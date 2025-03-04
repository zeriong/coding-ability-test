function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    const overLeng = overwrite_string.length;
    const strLeng = my_string.length;
    
    for (let i = 0; i < strLeng; i++) {
        if (i == s) {
            for (let j = 0; j < overLeng; j++) {
                answer += overwrite_string[j];
                i += 1;
            }
        }
        answer += my_string[i] || "";
    }
    
    return answer;
} 