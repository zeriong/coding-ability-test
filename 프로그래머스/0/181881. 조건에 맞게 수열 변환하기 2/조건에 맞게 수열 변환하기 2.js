function solution(arr, idx=1, result={}) {
    
    result[0] = arr.toString();
    
    const modifier = () => {
        
        arr = arr.map((v) => {
            const isEven = v%2 == 0;
            if (50 <= v && isEven) return v/2;
            else if (50 > v && !isEven) return v*2 + 1;
            return v;
        });
        
        result[idx] = arr.toString();
        
        if (result[idx] != result[idx-1]) {
            idx++;
            return modifier();
        }
        
        return idx - 1;
    }
    
    return modifier();
}