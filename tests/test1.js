import { Client } from '../dist/index.js'

let client = new Client().setProject("test")

// console.log(await client.call(
//     'post',
//     new URL(client.config.endpoint + '/user'),
//     {
//         'content-type': 'application/json'
//     },
//     {
//         email: "ravikantsaini047@gmail.com",
//         password: "Ravi@123",
//         name: "Ravikant Saini"
//     }
// ))

const testRes = async () => {
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzZhZTU4Mjk1ZjY0MmQ1YTc0Y2Y1NTAiLCJpYXQiOjE3MzUwNTg4MTgsImV4cCI6MTczNTA1OTcxOH0.Y87aiJNmOsVs9UgsbePBxfQLTaXd_JWkFROdlqsTLas"
    client.setJWT(jwt)
    console.log(await client.call(
        'get',
        new URL(client.config.endpoint + '/console/user'),
        {
            'content-type': 'application/json'
        },
    ))
}

await testRes()

const createSession = async () => {
    let res = await client.call(
        'post',
        new URL(client.config.endpoint + '/console/account/login'),
        {
            'content-type': 'application/json'
        },
        {
            email: "ravikantsaini047@gmail.com",
            password: "Ravi@123"
        }
    )
    console.log(res)
}

// await createSession()