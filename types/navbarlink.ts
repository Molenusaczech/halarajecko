import { ReactElement } from "react"

type NavBarLink = {
    name: string,
    isExternal: boolean,
    href: string,
    icon: ReactElement
}

export type { NavBarLink }