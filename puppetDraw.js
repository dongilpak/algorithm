// 2019 카카오 개발자 겨울 인턴쉽 크레인 인형 뽑기
const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

const solution = (board, moves) => {
    let answer = 0;
    let keep_puppets = [];

    for (let move of moves) {
        const LOC = move - 1;
        for (let i = 0; i < board.length; i++) {
            if (board[i][LOC]) {
                keep_puppets.push(board[i][LOC]);
                board[i][LOC] = 0;

                if (
                    keep_puppets[keep_puppets.length - 1] ===
                    keep_puppets[keep_puppets.length - 2]
                ) {
                    keep_puppets.splice(keep_puppets.length - 2);
                    answer += 2;
                }

                break;
            }
        }
    }
    console.log(keep_puppets, answer);
    return answer;
};

solution(board, moves);
