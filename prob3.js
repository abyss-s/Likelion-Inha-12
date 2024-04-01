/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    let answer = [];

    let min_idx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min_idx]) {
            min_idx = i;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (i !== min_idx) {
            answer.push(arr[i]);
        }
    }

    if (answer.length === 0) {
        answer.push(-1);
    }

    return answer;
}
