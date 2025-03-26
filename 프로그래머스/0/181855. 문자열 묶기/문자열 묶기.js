const solution=(arr, ans=[]) => {
    arr.map(v=> {
        var len = v.length;
        ans[len] ? ans[len] += 1 : ans[len] = 1;
    });
    return Math.max(...ans.filter(v=>v)); 
}