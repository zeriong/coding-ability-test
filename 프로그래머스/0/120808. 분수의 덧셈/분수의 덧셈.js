function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1*denom2;
    let numer = denom1*numer2 + denom2*numer1;
    
    let smNum;
    if(numer < denom){
        smNum = numer;
    } else {
        smNum = denom;
    }
    
    if ((0 < numer1 < 1000) &&
        (0 < denom1 < 1000) &&
        (0 < numer2 < 1000) &&
        (0 < numer1 < 1000) ) {
        while (true) {
            if(numer % smNum === 0 && denom % smNum === 0) {
                return [ numer / smNum, denom / smNum ]; 
            }
            smNum = smNum - 1;
        }
    }
}