function solution(id_list, report, k) {
    var answer = [];
    let arr = [];
    let hash = {};
    let blackList = [];
    
    // 신고자와 신고한 유저 배열로 분리
    report.map(val => arr.push(val.split(" ")));
    
    // hash 방식
    id_list.map(id => hash[id] = { black: 0, ban: [] });
    
    // hash에 신고자, 신고한 유저 추가
    arr.map(val => {
        const [name, ban] = val;
        
        if (hash[name]) {
            if (hash[name].ban.some(v => v == ban)) return;
            hash[name].ban.push(ban);
            hash[ban].black += 1;
        }
    })
    
    // 배열화
    let hashArr = Object.entries(hash);
    
    // 블랙리스트 생성
    hashArr.map(val => {
        const [name, obj] = val;
        if (obj.black >= k) blackList.push(name);
    });
    
    // 블랙리스트와 신고한 유저를 대조해서 카운트 후 answer에 push
    hashArr.map(val => {
        const [name, obj] = val;
        let num = 0;
        
        if (obj.ban.length) {
            obj.ban.map(v => {
                if (blackList.some(b => b == v)) num++;
            })
        }
        
        answer.push(num);
    })
    
    return answer; 
}