function solution(n,k,ans=[],sum=0) {
    while(sum <= n) {
        sum += k
        if (sum <= n) ans.push(sum);
    }
    return ans;
}