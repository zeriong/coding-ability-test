function solution(maps) {
    const q = [];
    const xLen = maps.length;
    const yLen = maps[0].length;
    const goalX = xLen - 1;
    const goalY = yLen - 1;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    
    q.push([0, 0, 1]); 
    
    while(q.length) {
        const [x, y, move] = q.shift();
        
        if (x == goalX && y == goalY) return move;
        
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            if (
                nx < xLen && nx >= 0 &&
                ny < yLen && ny >= 0 &&
                maps[nx][ny] == 1) {
                q.push([nx, ny, move + 1]);
                maps[nx][ny] = 0;
            }
        }
    }
    
    return -1;
}