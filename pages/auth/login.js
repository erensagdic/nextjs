import Layout from "../../components/layout";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {setSession} from "../../utils/TokenControl"
import {useRouter} from "next/router";

function LoginPage() {
    const {push} = useRouter();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState()

    useEffect(() => {
        return () => {
            try {
                const usernameInput = document.getElementById('username')
                if (usernameInput !== null) {
                    document.getElementById('username').focus()
                }
            } catch (e) {
                console.log(e)
            }
        };
    }, []);

    const doLogin = async () => {
        const response = await fetch('../api/login', {
            method: "post",
            body: JSON.stringify({
                username, password
            })
        }).then((then) => then.json())
        if (response.error) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.error,
            }).then(() => {
                window.localStorage.removeItem('jwt-token')
                window.location.reload()
            })
            return
        }
        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: "You are rediricting to dashboard.",
        }).then(() => {
            setSession(response.token);
            push('../ricknmorty');
        })
    }
    return (
        <Layout>
            <div className="col-12 text-center mt-5">
                <img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt=""
                     className="col-2"/>
            </div>
            <div className={"col-12 d-flex"} style={{textAlign: "-webkit-center"}}>
                <div className={"text-center border p-5 mt-2 mb-5 m-auto"}>
                    <p className={"mb-4"}>Please Login</p>
                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)}
                           className="form-control mb-3" autoComplete="off" placeholder="Username"/>
                    <input type="password" id="password" name="password"
                           onChange={(e) => setPassword(e.target.value)}
                           className="form-control" autoComplete="off" placeholder="Password"/>
                    <button type="button" onClick={doLogin} className={"btn btn-success mt-3 "}>Login</button>
                </div>
            </div>
        </Layout>
    )
}

export default LoginPage