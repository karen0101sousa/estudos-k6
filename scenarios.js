import http from 'k6/http'
import { check } from 'k6'
import { sleep } from 'k6'
import { scenario } from 'k6/execution'

export const options = {
    vus: '10',
    duration: '5s',
    thresholds: {
        http_req_duration: ['p(95)<120'],
        http_req_duration: ['max<2000'],
        http_req_failed: ['rate<0.04'],
        http_reqs: ['count>20'],
        http_reqs: ['rate>4'],
        vus: ['value>9'],
        checks: ['rate>=0.96']
    }

}

export default function () {
    const res = http.get('https://quickpizza.grafana.com/test.k6.io/' + (scenario.iterationInTest === 1 ? 'foo' : ''))
    //console.log(res.body)
    check(res, {
        'status is 200': (r) => r.status === 200,
        'page is startpage': (r) => r.body.includes('QuickPizza Legacy')
    })
    sleep(2)
}