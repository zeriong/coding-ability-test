solution=(n)=>[0,1,2,3,4,5,6,7,8,9]
    .filter(v=>!n.includes(v))
    .reduce((a,c)=>a+c);