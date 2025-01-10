function solution(id_pw, db, ans) {
    const [id, pw] = id_pw;
    
    for (let i = 0; i < db.length; i++) {
        const cur = db[i];
        if (cur[0] == id && cur[1] != pw) ans = "wrong pw";
        if (cur[0] == id && cur[1] == pw) ans = "login";
    }
    
    if (!ans) return "fail";
    
    return ans
}