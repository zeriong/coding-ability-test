solution=(r,a,A=[10000,100,1])=>r
    .map((v,i)=>a[i]?{v,i}:0)
    .filter(v=>v)
    .sort((a,b)=>a.v-b.v)
    .slice(0,3)
    .reduce((a,c,i)=>a+A[i]*c.i,0);