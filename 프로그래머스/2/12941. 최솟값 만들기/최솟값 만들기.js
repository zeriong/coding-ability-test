function solution(A,B){   
    B.sort((a,b)=>b-a);
    return A.sort((a,b)=>a-b).reduce((a,c,i)=>a+c*B[i],0)
}