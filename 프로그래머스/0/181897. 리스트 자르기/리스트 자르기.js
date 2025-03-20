function solution(n, slicer, num_list, answer = []) {
    if (n == 1) return num_list.slice(0, slicer[1] + 1);
    if (n == 2) return num_list.slice(slicer[0], num_list.length);
    if (n == 3) return num_list.slice(slicer[0], slicer[1] + 1);
    
    const arr = num_list.slice(slicer[0], slicer[1] + 1);
    for (let i = 0; i < arr.length; i++) {
        if (i % slicer[2] == 0) answer.push(arr[i]);
    }
    return answer; 
} 