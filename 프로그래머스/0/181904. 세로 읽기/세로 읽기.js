solution = (l, m, c, a="") => {
    if (c==1&&c==m) return l;
    for (let i = 1; i <= l.length; i++) if (i % m == 0) a += l[i-m+c-1];
    return a;
}