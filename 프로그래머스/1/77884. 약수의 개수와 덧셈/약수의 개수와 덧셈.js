function solution(l,r) {
    if (l == r) return r;
    
    const arr = Array.from({ length: r-l+1 }, (_,i)=>l+i);
    
    return arr.reduce((a,c,i) => {
        const evens = [1];
        
        for(let i = 2; i <= c; i++) {
            if (c%i == 0) {
                evens.push(i);
            }
        }
        
        return a + (evens.length % 2 == 0 ? c : -c)
    }, 0);
}