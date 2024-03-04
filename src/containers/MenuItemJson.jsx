import { CgProfile } from "react-icons/cg";
import { RiGlobalLine } from "react-icons/ri";

export const MenuItem = [
    {title: "Vehicles", id: 0, megaMenu: "This is all about Vehicles"},
    {title: "Energy", id: 1, megaMenu: "This is all about Energy"},
    {title: "Charging", id: 2, megaMenu: "This is all about Charging"},
    {title: "Discover", id: 3, megaMenu: "This is all about Discover"},
    {title: "Shop", id: 4, megaMenu: "This is all about Shop"},
    {support: "Support", id: 5},
    { country: "United States", language: "English", icon: <RiGlobalLine />, id: 6 },
    {account:"Account", icon: <CgProfile />, id: 7}
]


export const MenuHover = [
    { carImage: "../../public/images/Model-S.png", model: "Model S", learn: "Learn", order: "Order"}
]