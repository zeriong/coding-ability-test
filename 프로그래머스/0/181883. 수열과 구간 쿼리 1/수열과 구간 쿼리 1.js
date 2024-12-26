solution = (a, q) => {
    for (let i = 0; i < q.length; i++)
        for (let j = q[i][0]; j <= q[i][1]; j++) a[j]++;
    return a;
}