/* 2번 문제 답안을 작성해주세요. */
function solution(num) {
    let fac = 1;
    let i = 1;
    
    while (fac <= num) {
        i++;
        fac*= i;
    }
    
    return i-1;
}