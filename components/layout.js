import CustomNav from "./CustomNav";
import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Layout({children}) {
    const {push} = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        return () => {
            const token = window.localStorage.getItem('jwt-token');
             setIsLoggedIn(token !== null)
             checkLogin()

        };
    }, [isLoggedIn]);

    function checkLogin() {

    }
    return (
        <div>
            <CustomNav isLoggedIn={isLoggedIn}/>
            <main>
                {children}
            </main>

            <footer className={styles.footer}>
                <p>Here is the footer area.</p>
            </footer>
        </div>
    )
}