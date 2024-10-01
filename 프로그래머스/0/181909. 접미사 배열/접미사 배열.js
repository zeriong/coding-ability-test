function solution(str) {
    var answer = [str];
    let strArr = str.split("");
    for (let i = 0; i < str.length - 1; i++) {
        strArr.shift();
        const join = strArr.join("");
        answer.push(join);
    }
    return answer.sort();
}