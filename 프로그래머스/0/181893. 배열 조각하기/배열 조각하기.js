function solution(arr, q) {
    for (let i = 0; i < q.length; i++) {
        if (i%2 == 0) arr = arr.slice(0, q[i] + 1);
        else arr = arr.slice(q[i], arr.length);
    }
    return arr;
}