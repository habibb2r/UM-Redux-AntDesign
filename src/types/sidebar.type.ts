import { ReactNode } from "react"

export type TSideBarItem ={
    key: string,
    label: ReactNode,
    children?: TSideBarItem[]
}


export type TUserPath ={
    name: string,
    path?: string,
    element?: ReactNode,
    children?: TUserPath[]
}