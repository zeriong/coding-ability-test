function solution(s1, s2, answer = 0) {
    s1.forEach(v => {
        if (s2.some(_v => _v == v)) answer++
    })
    return answer;
}