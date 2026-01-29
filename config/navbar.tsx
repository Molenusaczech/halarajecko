import { NavBarLink } from "@/types/navbarlink";
import { HomeIcon, Coins, Calendar1, House, Volleyball, Icon, HandCoins } from "lucide-react";
import { batBall, houseManor } from "@lucide/lab";

const NAVBAR: NavBarLink[] = [
    {
        name: "Domů",
        isExternal: false,
        href: "/",
        icon: (<HomeIcon />)
    },
    {
        name: "Ceník",
        isExternal: false,
        href: "/cenik",
        icon: (<HandCoins />)
    },
    {
        name: "Velký sál",
        isExternal: false,
        href: "/velky-sal",
        icon: (<Icon iconNode={houseManor} />)
    },
    {
        name: "Squash",
        isExternal: false,
        href: "/squash",
        icon: (<Icon iconNode={batBall} />)
    },
    {
        name: "Kalendář obsazenosti",
        isExternal: true,
        href: "https://www.rajecko.cz/sportovni-hala-kalendar-obsazenosti",
        icon: (<Calendar1 />)
    }
]