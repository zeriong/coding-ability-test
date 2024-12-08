solution = (p) => {
    let [x, n] = [0, 0];
    let split = p.split(" ");
    
    if (split.length == 1) return split[0];
    
    split.forEach((v, i) => {
        if (v == "+") return;
        if (v == "x") return x++;
        if (v.includes("x")) return x += +v.replace("x","");
        n += +v;
    });
    
    if (x && n) return `${x == 1 ? "" : x}x + ${n}`;
    if (x && !n) return `${x == 1 ? "" : x}x`;
    if (!x && n) return `${n}`;
}
