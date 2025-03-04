function solution(ineq, eq, n, m) {
    const sumStr = ineq + eq;
    if (sumStr == ">=") return +(n >= m);
    if (sumStr == "<=") return +(n <= m);
    if (sumStr == ">!") return +(n > m);
    if (sumStr == "<!") return +(n < m); 
} 