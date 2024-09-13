function solution(my_string, n) {
    var answer = [];
    const reverse = my_string.split("").reverse();
    for (let i = 0; i < n; i++) {
        answer.push(reverse[i]);
    }
    return answer.reverse().join("");
}