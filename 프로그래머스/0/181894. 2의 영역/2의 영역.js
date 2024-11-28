// solution=(a)=>[a.findIndex(v=>v==2), a.findLastIndex((v=>v==2))]

solution = (arr, iArr=[]) => {
    arr.forEach((v,i)=>{
        if(v==2) {
            if(iArr[0] >= 0) iArr[1] = i;
            else iArr[0] = i;
        }
    });
    
    if (!iArr.length) return [-1];
    if (iArr[0] && !iArr[1]) return [arr[iArr[0]]];
    
    return arr.slice(iArr[0], iArr[1]+1);
}