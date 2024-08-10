function solution(strArr) {
    var answer = [];
    strArr.forEach((v, i) => {
        answer.push(i % 2 > 0 ? v.toUpperCase() : v.toLowerCase())
    })
    return answer;
}