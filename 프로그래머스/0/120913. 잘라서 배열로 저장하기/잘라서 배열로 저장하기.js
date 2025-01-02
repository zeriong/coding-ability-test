function solution(str, n, a=[]) {
    
    if (str.length == 1 && n == 1) return [str]
    
    const slicer = (s, e) => {
        if (s >= str.length) return a;
        
        a.push(str.slice(s, e));
        
        s = e;
        e += n;
        
        return slicer(s, e);
    }
    
    return slicer(0, n);
}