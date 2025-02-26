function solution(ineq, eq, n, m) {
    const sumStr = ineq + eq;
    if (sumStr == ">=") return Number(n >= m);
    if (sumStr == "<=") return Number(n <= m);
    if (sumStr == ">!") return Number(n > m);
    if (sumStr == "<!") return Number(n < m);
} 