import http from 'k6/http'
import { check } from 'k6'


export default function () {

    const credentials = {
        username: 'leon tolstoi' + Date.now(),
        password: 'teste' + Date.now()
    }


    http.post(
        'http://localhost:8000/user/register/',
        JSON.stringify(credentials),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    let res = http.post(
        'http://localhost:8000/auth/token/login/',
        JSON.stringify(
            {
                username: credentials.username,
                password: credentials.password
            }
        ),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    const accessToken = res.json().access
    console.log(accessToken)

    http.get(
        'http://localhost:8000/my/crocodiles/',
        {
            headers: {
                Authorization: 'Bearer' + accessToken

            }
        }
    )

    res = http.post(
        'http://localhost:8000/my/crocodiles/',
        JSON.stringify(
            {
                name: 'Random croc',
                sex: 'M',
                date_of_birth: '1900-10-28'
            }
        ),
        {
            headers: {
                Authorization: 'Bearer' + accessToken,
                'Content-Type': 'application/json'

            }
        }
    )

    const newCrocodileId = res.json().newCrocodileId

    res = http.get(
        `http://localhost:8000/my/crocodiles/${newCrocodileId}/`,
        {
            headers: {
                Authorization: 'Bearer' + accessToken

            }
        }
    )

    check(res, {
        'status is 200': (r) => r.status === 200,
        'crocodile id': (r) => r.json().id === newCrocodileId
    })

    res = http.put(
        `http://localhost:8000/my/crocodiles/${newCrocodileId}/`,
        JSON.stringify(
            {
                name: 'Random croc',
                sex: 'M',
                date_of_birth: '1900-10-28'
            }
        ),
        {
            headers: {
                Authorization: 'Bearer' + accessToken,
                'Content-Type': 'application/json'

            }
        }
    )

    res = http.patch(
        `http://localhost:8000/my/crocodiles/${newCrocodileId}/`,
        JSON.stringify(
            {
                sex: 'F',
                date_of_birth: '1901-10-29'
            }
        ),
        {
            headers: {
                Authorization: 'Bearer' + accessToken,
                'Content-Type': 'application/json'

            }
        }
    )

    res = http.del(
        `http://localhost:8000/my/crocodiles/${newCrocodileId}/`,
        null,
        {
            headers: {
                Authorization: 'Bearer' + accessToken

            }
        }
    )

}