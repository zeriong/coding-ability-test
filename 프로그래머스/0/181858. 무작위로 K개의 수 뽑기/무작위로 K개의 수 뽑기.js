function solution(arr, k) {
    const setArr = [...new Set(arr)];
    if (k > setArr.length) {
        return Array.from({ length: k },(v,i) => isNaN(setArr[i]) ? -1 : setArr[i]);
    } else {
        return setArr.slice(0, k);
    }
}