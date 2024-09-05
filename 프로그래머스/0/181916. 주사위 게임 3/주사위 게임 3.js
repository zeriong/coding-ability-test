function solution(a, b, c, d) {
    const obj = {};
    [a,b,c,d].forEach(v => {
        if (obj[v]) obj[v]++;
        else obj[v] = 1;
    });
    const arr = Object.entries(obj);
    if (arr.length == 1) return 1111 * arr[0][0];
    else if (arr.length == 3) return arr.filter(v => v[1] != 2).reduce((a,v) => a * v[0], 1);
    else if (arr.length == 4) return Math.min(...arr.map(v => v[0]));
    else if (arr[0][1] - arr[1][1] == 0) return (Number(arr[0][0]) + Number(arr[1][0])) * Math.abs(arr[0][0] - arr[1][0]);
    return (10 * Number(arr.find(v => v[1] == 3)[0]) + Number(arr.find(v => v[1] == 1)[0])) ** 2
}