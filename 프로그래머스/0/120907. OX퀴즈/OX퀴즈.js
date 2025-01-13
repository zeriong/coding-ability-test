function solution(quiz, answer = []) {
    for (let i = 0; i < quiz.length; i++) {
        const [calc, result] = quiz[i].split("=");
        if (eval(calc) == result) answer.push("O");
        else answer.push("X");
    }
    
    return answer;
}