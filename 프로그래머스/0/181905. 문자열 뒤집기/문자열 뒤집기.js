function solution(str, s, e) {
    var answer = '';
    
    if (s == e) return str;
    
    for (let i = 0; i < str.length; i++) {
        if ((s == 0 && i != 0) || (s != 0)) answer += str[i];
        
        if ((i + 1 == s) || (s == i)) {
            for (let j = e; j >= s; j--) {
                answer += str[j];   
            }
            i = e;
        }
    }
    return  answer;
}