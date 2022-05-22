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
        <AuthContext.Provider value={{signInUrl, user}}>
            {children}
        </AuthContext.Provider>
    )
}

