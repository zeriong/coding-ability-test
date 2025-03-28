function solution(arr) {
    var answer = [];
    
    const spreadArr = (value) => {
        for (let i = 0; i < value; i++) answer.push(value);
    }
    
    for (let i = 0; i < arr.length; i++) spreadArr(arr[i]);
    
    return answer; 
}