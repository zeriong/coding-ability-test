function solution(nums) {
    var answer = 0;
    const len = nums.length;
    const max = len / 2;
    const map = new Map();
    
    for (let i = 0; i < len; i++) {
        const n = nums[i];
        if (map.get(n)) continue;
        map.set(n, 1);
    }
    
    for (const [_, n] of map) {
        answer += n;
    }
    
    return (answer > max) ? max : answer; 
}