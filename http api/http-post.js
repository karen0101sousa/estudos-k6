import http from 'k6/http'
import { check } from 'k6'


export default function(){

    const body = JSON.stringify({
        username: 'leon tolstoi' + Date.now(),
        password: 'teste'

    })

    const params = {
        headers : {
            'Content-Type': 'application/json'
        }
    }

    http.post('http://localhost:8000/user/register/', body, params)
}