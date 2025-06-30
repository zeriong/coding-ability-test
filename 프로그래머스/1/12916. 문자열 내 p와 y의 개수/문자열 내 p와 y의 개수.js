function solution(s, p=0, y=0){
    const lower = s.toLowerCase();
    for(let i = 0; i < lower.length; i++) {
        if (lower[i] == "p") p += 1;
        if (lower[i] == "y") y += 1;
    }
    return y == p;
}