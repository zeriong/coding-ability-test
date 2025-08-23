function solution(name) {
    var answer = 0;
    let move = name.length - 1;
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    [...name].forEach((v, i) => {
        let idx = alphabet.indexOf(v);
        let len = i + 1;
        
        answer += Math.min(idx, 26 - idx);
        
        while (len < name.length && name[len] === 'A') len++;
        
        let a_len = name.length - len;
        let backWay = i * 2 + a_len;
        let backFirst = i + 2 * a_len;

        move = Math.min(move, backWay, backFirst);
    });
    
    answer += move;
    
    return answer; 
}