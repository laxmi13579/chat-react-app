import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode, useContext } from "react"

type AuthContext = {

}

const Context = createContext<AuthContext | null>(null);

export function useAuth() {
    return useContext(Context);
}

type AuthProviderProps = {
    children: ReactNode
}
type User = {
    id: string,
    name: string,
    image?: string
}

export function AuthProvider({children}: AuthProviderProps) {

    const sinup = useMutation({
        mutationFn: (user: User) => {
            return axios.post(`${import.meta.env.VITE_SERVER_URL}/sinup`, user);
        }
    })
    return <Context.Provider value={{}}>
        {children}
    </Context.Provider>
}