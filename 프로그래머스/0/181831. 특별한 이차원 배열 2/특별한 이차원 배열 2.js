function solution(arr) {
    let isDiff = false;
    
    for (let i = 0; i < arr.length; i++) {
        if (isDiff) break;
        
        const cur = arr[i];
        
        for (let j = 0; j < cur.length; j++) {
            if (arr[i][j] != arr[j][i]) {
                isDiff = true;
                break
            }
        }
    }
    
    return Number(!isDiff); 
}