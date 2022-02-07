// 2022 KAKAO BLIND RECRUITMENT 신고 결과 받기
let id_list = ['muzi', 'frodo', 'apeach', 'neo'];
let report = [
    'muzi frodo',
    'apeach frodo',
    'frodo neo',
    'muzi neo',
    'apeach muzi',
];
let k = 2;

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a => {
        return a.split(' ');
    });

    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    }

    let good = new Map();
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        }
    }

    let answer = id_list.map(a => good.get(a) || 0);

    return answer;
}

solution(id_list, report, k);
