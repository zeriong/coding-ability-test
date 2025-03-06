function solution(code) {
    var answer = "";
    let mode = "0";
    
    for (let i = 0; i < code.length; i++) {
        const word = code[i];
        
        if (word == "1" || word == "0") {
            if (mode == "0" && word == "1") mode = "1";
            else if (mode == "1" && word == "1") mode = "0";
            continue;
        }
        
        if ( 
            (mode == "0") && (i % 2 == 0) ||
            (mode == "1") && (i % 2 > 0)
        ) {
            answer += word;
        }
    }

    return answer ? answer : "EMPTY";
}