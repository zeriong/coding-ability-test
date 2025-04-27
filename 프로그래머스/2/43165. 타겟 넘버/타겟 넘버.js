function solution(numbers, target) {
    var answer = 0;
    
    function dfs(depth, sum) {
        if (depth == numbers.length) {
            if (sum == target) return answer++;
        } else {
            dfs(depth + 1, sum + numbers[depth]);
            dfs(depth + 1, sum - numbers[depth]);
        }
    };
    
    dfs(0, 0);
    
    return answer;
} 