function solution(numbers, k) {
    var answer = 0;
    let len = numbers.length;
    let count = 0;
    
    //길이, 범위 검증
    if (len < 3 || len > 99) return answer;
    if (k < 1 || k > 999) return answer;
    
    // 배열의 연속성 검증
    for (let i in numbers) {
        if (numbers[i] !== Number(i)+1) return answer;
    }
    
    // 건너뛰고 처음부터 = len만큼 빼주고 다시 카운트
    for (let i=0; i<k; i++) {
        count += 2;
        
        if (count > len) count -= len;
    }
     
    // k번 반복시 n번째 요소반환
    answer = numbers[count-2]
    
    // k번 직전이 배열의 마지막에서 끝나면 마지막 k번째는 length-1번째 값을 반환
    if (answer == undefined) answer = numbers[len-1]

    return answer;
}