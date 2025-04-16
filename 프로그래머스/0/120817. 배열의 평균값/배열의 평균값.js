function solution(numbers) {
    var answer = 0;
    var length = numbers.length;
    
    if(length < 1 || length > 100) return answer;
    
    for (let i of numbers) {
        if (i < 0 || i > 1000) return answer;
    }
    
    var total = 0;
    
    numbers.forEach(i => total += i);
    
    var avg = total / length;
    
    if (avg % 1 == 0 || avg % 1 == 0.5) {
       answer = avg;
    } 
    
    return answer;
}