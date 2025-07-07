function solution(a,d) {
    const ans = a.filter(v=>Number.isInteger(v/d)).sort((a,b)=>a-b);
    if (ans.length) return ans;
    return [-1]
}