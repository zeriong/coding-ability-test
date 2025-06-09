function pushOnRight(str) {
    const arr = [...str];
    return [arr.pop(), ...arr].join("");
}

function solution(a, b) {
    if (a == b) return 0;
    
    let cnt = 0;
    
    for (let i = 0; i < a.length; i++) {
        a = pushOnRight(a);
        cnt++;
        if (a == b) {
            break;
        }
    }
    
    if (cnt == a.length) return -1;
    
    return cnt; 
}