function solution(genres, plays) {
    var answer = [];
    let len = genres.length;
    let hash = {};
    
    for (let i = 0; i < len; i++) {
        let gen = genres[i];
        let ply = plays[i];
        
        if (hash[gen] === undefined) hash[gen] = [ply ,[i, ply] ];
        else {
            hash[gen].push([i, ply]);
            hash[gen][0] = Number(hash[gen][0]) + Number(ply);
        }
    }
    let arr = Object.entries(hash);
    arr.sort((a, b) => b[1][0] - a[1][0])

    for (let [k, v] of arr) {
        v.sort((a,b) => b[1] - a[1])
        for (let i = 1; i < 3; i++) {
            if (!v[i]) break;
            answer.push(v[i][0]);
        }
    }
    return answer; 
}