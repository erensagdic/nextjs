const loggedInUsersMenus = [
    {
        link: "/",
        name: "Main Page"
    },

    {
        link: "/ricknmorty",
        name: "Rick & Morty Characters Cards"
    },

]

const unAuthenticatedUsersMenus = [
    {
        link: "/",
        name: "Main Page"
    },
    {
        link: "/auth/login",
        name: "Login Page"
    },
]

export  {loggedInUsersMenus, unAuthenticatedUsersMenus}