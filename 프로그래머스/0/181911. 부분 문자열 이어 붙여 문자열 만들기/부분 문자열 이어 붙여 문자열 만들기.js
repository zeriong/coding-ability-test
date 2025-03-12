function solution(my_strings, parts) {
    var answer = '';
    
    str = "abcdef"
    console.log(str.slice(0,4 + 1))
    
    for (let i = 0; i < my_strings.length; i++) {
        const currentString = my_strings[i];
        const [start, end] = parts[i];
        if (start == end) answer += currentString[start];
        else answer += my_strings[i].slice(start, end + 1);
    }
    
    return answer;  
}