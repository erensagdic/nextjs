import Link from "next/link";
import {loggedInUsersMenus, unAuthenticatedUsersMenus} from "../config/menus"
import {useRouter} from "next/router";

export default function CustomNav({isLoggedIn}) {
    const {push} = useRouter()
    const menu = isLoggedIn ? loggedInUsersMenus : unAuthenticatedUsersMenus;
    const navbarButtons = isLoggedIn ? (
        <>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 mx-2 my-sm-0" type="submit">Search</button>
            <button className="btn btn-outline-danger my-2 mx-2 my-sm-0" type="button" onClick={() => {
                window.localStorage.removeItem('jwt-token');
                push('../auth/login')
            }}>Log Out</button>
        </>
    ) : null
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <Link href="/">
                <a className="navbar-brand m-1" style={{color: "#00b5cc"}}>First Project</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse col-10" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto col-8">
                    {menu.map((value, key) => (
                        <li key={key} className="nav-item active">
                            <Link href={value.link}>
                                <a className="nav-link">{value.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="d-flex col-4 justify-content-end">
                    {navbarButtons}
                </div>
            </div>
        </nav>
    );
}