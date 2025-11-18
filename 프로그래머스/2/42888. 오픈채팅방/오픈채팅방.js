function solution(record) {
    var answer = [];
    let map = new Map();
    let idsAndActs = [];
    
    function createMessage(act, user) {
        if (act == 'Enter') return `${user}님이 들어왔습니다.`;
        if (act == 'Leave') return `${user}님이 나갔습니다.`;
    }
    
    record.map(val => {
        const d = val.split(" ");
        if (d[0] == 'Enter' || d[0] == 'Leave') {
            idsAndActs.push([d[0], d[1]]); 
        }
        if (d[0] != 'Leave') {
            map.set(d[1], d[2]);
        }
    });
    
    idsAndActs.map(val => {
        const [act, id] = val;
        const nick = map.get(id);
        const txt = createMessage(act, nick);
        answer.push(txt)
    })
    
    return answer; 
}