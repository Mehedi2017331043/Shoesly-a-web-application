import React from 'react'
import { ReactNavbar } from "overlay-navbar"
import logo from "../../../images/logo.png"
import { FaUserAlt } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { BsFillCartFill} from "react-icons/bs"

const options = {
    burgerColorHover: "#a62d24",
    burgerColor:"#ffb3b3",
    logo,
    logoWidth: "20vmax",
    navColor1: "#ffcccc",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Supplier",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/allProducts",
    link3Url: "/supplier",
    link4Url: "/about",
    link1Size: "3vmax",
    link1Color: "rgba(35,35,35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link2ColorHover: "#eb4034",
    link3ColorHover: "#eb4034",
    link4ColorHover: "#eb4034",
    link1Margin: "1.3vmax",
    link4Margin: "1.3vmax",
    profileIcon: true,
    ProfileIconElement: FaUserAlt,
    searchIcon: true,
    SearchIconElement: FaSearch,
    cartIcon: true,
    CartIconElement: BsFillCartFill,
    searchIconUrl:"/search",
    profileIconUrl:"/login",
    profileIconColor: "rgba(35,35,35,0.8)",
    searchIconColor: "rgba(35,35,35,0.8)",
    cartIconColor: "rgba(35,35,35,0.8)",
    searchIconMargin: "1.2vmax",
    cartIconMargin: "1.2vmax",
    profileIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034"
}
export const Header = () => {
    return (
        <ReactNavbar {...options} />
    )
}
export default Header;
