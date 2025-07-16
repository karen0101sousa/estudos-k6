import http from 'k6/http'
import { sleep, group, check } from 'k6'

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250'],
        'group_duration{group:::Main page}': ['p(95)<8000'],
        'group_duration{group:::News page}': ['p(95)<6000'],
        'group_duration{group:::Main page::Assets}': ['p(95)<3000'],
    }
}

export default function () {

    group('Main page', function () {
        let res = http.get('https://run.mocky.io/v3/cef9ccd3-7768-45f4-ab95-d2edd7f90db6?mocky-delay=5000ms')
        check(res, { 'status is 200': (r) => r.status === 200 })
    
        group('Assets', function () {
            http.get('https://run.mocky.io/v3/cef9ccd3-7768-45f4-ab95-d2edd7f90db6?mocky-delay=1000ms')

        })
    })


    group('News page', function () {
        http.get('https://run.mocky.io/v3/cef9ccd3-7768-45f4-ab95-d2edd7f90db6?mocky-delay=5000ms')
    })

    sleep(1)
}
