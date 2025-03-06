function solution(a, b, c) {
    var answer = 0;
    
    const cnt = Number(a == b) + Number(b == c) + Number(a == c)
    
    if (cnt >= 0) answer = a + b + c;
    if (cnt >= 1) answer = answer * (a**2 + b**2 + c**2);
    if (cnt >= 3) answer = answer * (a**3 + b**3 + c**3);
    
    return answer;
} 