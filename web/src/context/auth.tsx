import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type AuthResponse = {
    token: string
    user: {
        id: string
        avatar_url: string
        name: string
        login: string
    }
}

type User = {
    id: string
    name: string
    login: string
    avatar_url: string
}

type AuthContextData = {
    user: User | null
    signInUrl: string
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode
}

export function AuthProvider({children}: AuthProvider){
    const [user, setUser] = useState<User | null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=c787f8fdd9993fc27eef`

    async function signIn(githubCode: string){
        const response = await api.post<AuthResponse>("authenticate", {
            code: githubCode
        })

        const {token, user} = response.data

        localStorage.setItem("@dowhile:token", token)

        setUser(user)
        
    }

    function signOut(){
        setUser(null)
        localStorage.removeItem("@dowhile:token")
    }

    useEffect(() => {
        const token = localStorage.getItem("@dowhile:token")

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`
            api.get("profile").then(response => {
                setUser(response.data)
            })
        }
    }, [])

    useEffect(() => {
        const url = window.location.href;

        const hasGithubCode = url.includes('?code=')

        if(hasGithubCode){
            const [urlWithoutGithubCode, gitHubCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutGithubCode)
            
            signIn(gitHubCode)
        }
    }, [])


    return (
        <AuthContext.Provider value={{signInUrl, user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

