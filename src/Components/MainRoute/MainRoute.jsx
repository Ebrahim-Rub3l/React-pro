import React from "react"
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router"
import Footer from "../Footer/Footer"

const MainRoute = () => {

    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default MainRoute