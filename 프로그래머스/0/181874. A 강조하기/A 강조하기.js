solution = (s) => [...s].map(v=> {
    if ((v == "a") || ("A" == v.toUpperCase())) return "A"
    return v.toLowerCase()
}).join("");