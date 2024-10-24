function solution(s, e, k, ans=0) {
    for (let i = s; i <= e; i++) {
        if (i.length == 1) ans += i == k ? 1 : 0;
        [...String(i)].forEach(v => {
            if (Number(v) == k) ans++;
        });
    }
    return ans;
}