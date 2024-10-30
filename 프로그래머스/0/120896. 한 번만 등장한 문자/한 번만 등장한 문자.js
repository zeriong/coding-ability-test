function solution(s,obj={},arr=[]) {
    [...s].forEach(v => (obj[v] != null) ? (obj[v]++) : (obj[v] = 0));
    Object.entries(obj).forEach(([k,v])=>v==0&&arr.push(k));
    return arr.sort().join("");
}