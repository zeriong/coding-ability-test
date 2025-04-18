function solution(rsp) {
    var answer = '';
    const arr = [...rsp];
    const len = rsp.length;
    
    // rps의 길이와 일치여부 제한사항
    if (len < 1 || len > 100) return answer;
    // 반복문 1번만 사용함으로서 부하를 덜어줌.
    for (let i of arr) {
        if ((i !== '0') && (i !== '2') && (i !== '5')) {
            return answer;
        }
    }
    
    arr.map((val,i)=>{
        if (val == 0) arr[i] = '5';
        if (val == 2) arr[i] = '0';
        if (val == 5) arr[i] = '2'; 
    });
    
    answer = arr.join('');
    
    if (len !== arr.length) return answer = '';
    
    return answer;
}