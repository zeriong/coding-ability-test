function solution(str, pat) {
    const a = [...str].map(s => s==="A"?"B":"A").join("");
    return + a.includes(pat); 
}