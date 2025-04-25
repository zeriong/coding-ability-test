function solution(arr) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        answer.push(arr[i]);
        for (let j = i; j < arr.length; j++) {
            if (arr[j] == arr[j + 1]) continue;
            i = j;
            break;
        } 
    }
    
    return answer;
}