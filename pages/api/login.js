import jwt from "jsonwebtoken"
import * as jwtconfig from "../../config/jwtconfigs";

const users = [
    {
        username: "erensagdicc",
        password: "CoreSoft123",
        isAdmin: true
    },
    {
        username: "user",
        password: "password",
        isAdmin: false
    }
]

export default function handler(req, res) {
    if (!req.body) {
        res.statusCode = 404
        res.end(JSON.stringify({error: 'Something went wrong! Try again.'}))
        return
    }
    const {username, password} = JSON.parse(req.body)
    let isAdmin = false
    console.log(username, password);

    users.map((value) => {
        if (value.username === username && value.password === password) {
            res.json({
                token: jwt.sign({
                    username: username,
                    password: password,
                    isLoggedIn: true,
                    isAdmin: value.username === "erensagdicc"
                }, jwtconfig.SECRET_TOKEN)
            })

        }
    })
    res.statusCode = 403
    res.end(JSON.stringify({error: 'Credentials are not correct!'}))
}
