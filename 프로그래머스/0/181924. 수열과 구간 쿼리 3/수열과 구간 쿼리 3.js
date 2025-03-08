function solution(arr, queries) {
    var answer=  [...arr];
    queries.forEach(([i, j]) => {
        answer[i] = arr[j];
        answer[j] = arr[i];
        arr = [...answer];
    })
    return answer; 
}