function solution(str) {
    const ans = str.split(/a|b|c/).filter((v)=>v);
    return ans.length ? ans : ["EMPTY"];
}