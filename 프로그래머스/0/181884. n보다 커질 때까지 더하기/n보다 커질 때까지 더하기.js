solution=(l,n,a=0)=> {
    for (let i = 0; i <= l.length; i++) {
        if (a > n) return a;
        a += l[i];
    }
}