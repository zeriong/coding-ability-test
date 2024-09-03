function solution(arr) {
    var stk = [];
    let i = 0;
    
    while(i < arr.length) {
        const item = arr[i];
        const last = [...stk].pop();
        if (!stk.length) {
            stk.push(item);
            i++;
        }
        else if (last < item) {
            stk.push(item);
            i++;
        }
        else stk.pop();
    }
    
    return stk;
}