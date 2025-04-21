

function solution(numbers) {
    var answer = [];
    var numLength = numbers.length;
    
    const pushing = (item) => answer.push(item);
    
    if (numLength < 1 || numLength > 1000) return answer;

    for(let i=0; i<numLength; i++) {
        if (numbers[i] < -10000 || numbers[i] > 10000){ 
            return answer;
        }
    }
    
    for(let i=0; i<numLength; i++) {
        pushing(numbers[i] * 2);
    }
    
    return answer;
}