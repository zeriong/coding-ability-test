function solution(participant, completion) {
    var answer = '';
    const map = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        const person = participant[i];
        const compPerson = completion[i];
        
        map.set(person, (map.get(person) || 0) + 1);
        map.set(compPerson, (map.get(compPerson) || 0) - 1);
    }
    
    for (const [person, isComp] of map) {
        if (isComp > 0) return person; 
    }
}