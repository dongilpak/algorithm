// 없는 숫자 더하기
// [5,8,4,0,6,7,9]
// [1, 2, 3, 4, 6, 7, 8, 0]
const numbers = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
    const zeroToNine = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    const nums = new Set(numbers);

    Set.prototype.difference = function (set) {
        const result = new Set(this);

        for (const value of set) {
            result.delete(value);
        }

        return result;
    };

    const differenceNum = [...zeroToNine.difference(nums)];

    let answer = differenceNum.reduce((acc, cur) => acc + cur, 0);
    return answer;
}

solution(numbers);
