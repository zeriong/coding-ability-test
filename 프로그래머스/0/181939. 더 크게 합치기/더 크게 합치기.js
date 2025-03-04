function solution(a, b) {
    const caseA = Number(String(a) + String(b));
    const caseB = Number(String(b) + String(a));
    if (caseA === caseB) return caseA;
    return Math.max(caseA, caseB); 
}