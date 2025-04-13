function solution(age) {
    var answer = '';
    const strAge = [...String(age)];
    
    if (typeof age !== 'number') return answer;
    if (age > 1000) return answer;
    
    answer = strAge.map((val)=> 'abcdefghij'[val]).join('');
    
    return answer; 
}