function solution(my_string, alp) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        const word = my_string[i];
        answer += (word == alp) ? word.toUpperCase() : word;
    }
    return answer; 
}