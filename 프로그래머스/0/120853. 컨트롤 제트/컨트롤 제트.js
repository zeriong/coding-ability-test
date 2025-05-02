function solution(s) {
    var answer = 0;
    const S = [...s]
    const arr = s.split(' ')
    const num = (n) => Number(n);
    const len = s.length;
    
    //길이 제한사항
    if (len < 1 || len > 1000) return answer;
    
    //공백으로 구별 & 'Z',음수,숫자만 포함여부 체크
    if (s.match(/[-Z\s0-9]/g).join('') !== s) return answer
    
    //'Z'시작여부 & 시작끝 공백여부체크
    if (S[0] == 'Z') return answer;
    if (S[0] == ' ' || S[len-1] == ' ') return answer;
    
    //연속공백 체크 & Z의 연속성 체크 1
    for (let i=0; i < len; i++) {
        if (S[i] == 'Z' && S[i+1] == 'Z') return answer = 0;
        if (S[i] == ' ' && S[i+1] == ' ') return answer;
    }
    
    for (let i=0; i < arr.length; i++) {
        const el = (i) => num(arr[i]);
        
        //0을 제외한 0으로시작하는 숫자 체크
        if (arr[i] == '0'+el(i)) return answer = 0;
        
        //Z의 연속성 체크 2
        if (arr[i] == 'Z' && arr[i+1] == 'Z') return answer = 0;
        
        //원소숫자 제한사항
        if (el(i) < -1001 || el(i) > 999) return answer = 0;
        
        if (el(i)) answer += el(i);
        if (arr[i] == 'Z') answer -= el(i-1);
    }
     
    return answer;
}