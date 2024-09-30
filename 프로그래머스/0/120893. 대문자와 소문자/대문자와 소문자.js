const solution = (str, answer = "") => {
    for (let i = 0; i < str.length; i++) {
        const word = str[i];
        const upper = word.toUpperCase();
        answer += (upper == word) ? word.toLowerCase() : upper;
    }
    return answer;
}