function solution(age) {
    var answer = 0;
    var crit = 2022;
    var AG = age - 1;
    
    if (age <= 0 || age > 120) return answer;
    
    answer = crit - AG;
    
    return answer; 
}