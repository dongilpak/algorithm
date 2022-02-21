// 음양 더하기

const absolutes = [4, 7, 12];
const signs = [false, false, true];

function solution(absolutes, signs) {
    let answer = 0;

    signs.forEach((sign, i) =>
        sign ? (answer += absolutes[i]) : (answer -= absolutes[i])
    );

    return answer;
}

solution(absolutes, signs);
