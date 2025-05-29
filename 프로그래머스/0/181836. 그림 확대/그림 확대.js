function solution(picture, k) {
    var answer = [];
    
    for (let i = 0; i < picture.length; i++) {
        const cur = picture[i];
        let word = "";
        
        for (let j = 0; j < cur.length; j++) {
            word += cur[j].repeat(k)
        }
        
        for (let r = 0; r < k; r++) {
            answer.push(word);
        }
    }
    
    return answer;
}