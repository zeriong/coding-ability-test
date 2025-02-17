function solution(n) {
    var answer = "";
    
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const arr = [...n];
    
    let word = "";
    
    while (arr.length) {
        const start = arr.shift();
        
        word += start;
        
        const find = nums.indexOf(word);
        
        if (find >= 0) {
            answer += find;
            word = "";
        }
    }
    
    return +answer
}