function solution(arr, idx, ans=0) {
    for (let i = idx; i < arr.length; i++) if (arr[i] == 1) return ans = i;
    ans = -1; return  ans;
}