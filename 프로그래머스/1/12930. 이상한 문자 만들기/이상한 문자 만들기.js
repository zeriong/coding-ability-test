function solution(s) {
    const splited = s.split(" ");
    let answer = "";
    
    splited.forEach((v, idx) => {
        let word = "";
        for(let i = 0; i < v.length; i++) {
            const cur = v[i];
            if (i % 2 == 0) {
                word += cur.toUpperCase();
            } else {
                word += cur.toLowerCase();
            }
        }
        answer += `${(idx == 0 ? "" : " ") + word}`;
    });
    
    return answer;
}