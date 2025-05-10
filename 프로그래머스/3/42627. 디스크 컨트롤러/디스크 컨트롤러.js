function solution(jobs) {
    let len = jobs.length;
    let q = [];
    let inPrograss = 0;
    let sum = 0;
    
    /* 조건: 하드디스크가 작업을 안할땐 먼저 요청이 들어온 작업 우선 처리
    => 반드시 시작은 요청이 가장 낮은 것부터 */
    jobs.sort((a, b) =>a[0] - b[0]);
    while (q.length || jobs.length) {
        /* 큐는 shift로 가장 앞 원소를 꺼내기 때문에 jobs[0](첫번째)가 기준이고 
        => (요청시간 > 경과시간) = 진행시간을 맞춰주어야 함 */
        while (jobs[0] && jobs[0][0] <= inPrograss) {
            let [req, time] = jobs.shift();
            q.push([req, time]);
        }
        
        // 최단시간 = 작업소요시간이 짧은 순서
        q.sort((a, b) => a[1] - b[1]);
        if (q.length) {
            let [req, time] = q.shift();
            inPrograss += time; // 경과시간을 소요시간만큼 더 늘려줌
            sum += inPrograss - req; // 경과시간 - 요청시간 = [요청 ~ 종료시간]
        }
        // q를 만드는 while문에서 (요청시간 > 진행시간) = 진행시간 건너뛰어주기
        else inPrograss = jobs[0][0];
    }
    return parseInt(sum / len); 
}