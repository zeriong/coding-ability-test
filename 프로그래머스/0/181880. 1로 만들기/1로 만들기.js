function solution(l, c = 0) {
    
    // 나누기 함수
    const divider = (v) => {
        c++;
        if (v % 2 > 0) return (v-1)/2;
        else return v/2;
    }
    
    // 각 원소가 1이 될 때까지 계산
    l.forEach((v) => {
        while (v > 1) v = divider(v);
    })
    
    return c;
}