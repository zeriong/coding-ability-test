function solution(bandage, health, attacks) {
    let attkTimes = [];
    let damages = [];
    let max = 1000;
    let cureCnt = 0;
    let life = health;
    
    // 시간과 데미지를 나누어 담음
    attacks.map(el => {
        attkTimes.push(el[0]);
        damages.push(el[1]);
    });
    // 반복문을 위해 가장 높은 시간 추출
    max = Math.max(...attkTimes);
    
    // i = 경과시간
    for (let i = 1; i <= max; i++) {
        if (i == attkTimes[0]) {
            // 공격 당하면 해당 시간과 데미지 삭제 후 처리
            attkTimes.shift();
            cureCnt = 0;
            life -= damages.shift();
            
            // 죽으면 즉시 -1 반환
            if (life <= 0) return -1;
            
            continue;
        }
        // 치료카운팅
        cureCnt++;
        
        // 이미 health가 max 라면
        if (life > health) {
            // 추가 치료 조건만족 시 초기화 후 continue
            if (cureCnt == bandage[0]) cureCnt = 0;
            continue;
        }
        
        // 추가치료 후 카운팅 초기화
        if (cureCnt == bandage[0]) {
            life += bandage[2];
            cureCnt = 0;
        }
        
        // 지속 치료
        life += bandage[1];
        
        // 최대 생명력을 넘지 않도록
        if (life > health) life = health;
    }
    
    return life;
}