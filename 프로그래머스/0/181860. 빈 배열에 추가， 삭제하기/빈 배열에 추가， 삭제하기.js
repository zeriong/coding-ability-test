function solution(arr, flag) {
    var answer = [];
    
    const increaseArr = (value) => {
        const length = value * 2;
        const arr = [];
        for(let i = 0; i < length; i++) {
            arr.push(value)
        }
        return arr;
    }
    
    const decreaseArr = (value) => {
        for(let i = 0; i < value; i++) answer.pop();
    }
    
    arr.forEach((v, i) => {
        if (flag[i]) answer.push(...increaseArr(v));
        else decreaseArr(v);
    })
    
    return answer; 
}