function solution(arr1, arr2) {
    const length1 = arr1.length;
    const length2 = arr2.length;
    
    function reducer(target) {
        return target.reduce((a,c)=>a+c);
    }
    
    function returnAnswer(a, b) {
        if (a < b) return -1;
        else if (a > b) return 1;
        else if (a == b) return 0;
    }
    
    if (length1 == length2) {
        return returnAnswer(reducer(arr1), reducer(arr2));
    }
    
    return returnAnswer(length1, length2);
}