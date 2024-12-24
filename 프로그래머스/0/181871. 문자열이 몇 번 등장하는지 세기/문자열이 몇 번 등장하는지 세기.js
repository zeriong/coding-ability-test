const solution = (str, pat, ans = 0) => {
    const patLen = pat.length;
    
    for (let i = 0; i < str.length; i++) {
        const cur = str[i];
        
        if (cur == pat[0]) {
            let idxCnt = 0;
            let sameCnt = 0;
            
            for (let j = 0; j < patLen; j++) {
                if (str[i + j] == pat[idxCnt]) sameCnt++;
                idxCnt++;
            }
            
            if (sameCnt == patLen) ans++;
        }
    }
    
    return ans;
}
