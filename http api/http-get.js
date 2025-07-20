import http from 'k6/http'
import { check } from 'k6'

export default function () {
    let res = http.get('http://localhost:8000/public/crocodiles/')
    //console.log(res)
    const crocodiles = res.json()
    const crocodileId = crocodiles[0].id
    const crocodileName = crocodiles[0].name

    //k6 run --http-debug="full" http-get.js

       
    res = http.get(`http://localhost:8000/public/crocodiles/${crocodileId}/`)
    
    console.log(res.headers['Content-Type'])

    check(res, {
        'status is 200': (r) => r.status === 200,
        'crocodile name': (r) => r.json().name === crocodileName

    })

    http.post('http://localhost:8000/auth/token/login/')
}