function solution(players, callings) {
    var answer = [];
    let hash1 = new Map();
    let hash2 = new Map();
    
    // { name: idx ... }, { idx: name ... } 해쉬 생성
    players.map((v, i) => {
        hash1.set(v, i);
    });
    players.map((v, i) => {
        hash2.set(i, v);
    });
    
    callings.map((v, i) => {
        const player = callings[i];
        
        // 두가지 해쉬를 교차로 체크하며 연산시간 줄임
        if (hash1.get(player) !== 0) {
            let originIdx = hash1.get(player);
            let findName = hash2.get(originIdx - 1);
            hash1.set(player, originIdx - 1)
            hash1.set(findName, originIdx)
            hash2.set(originIdx, findName)
            hash2.set(originIdx - 1, player)
        }
    });
    
    for (let [key, val] of hash1.entries()) {
        answer[val] = key;
    }
    
    return answer; 
}