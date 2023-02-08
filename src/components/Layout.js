import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {

    return (
        <div id="app" className="app">
            <Header/>
            <Sidebar/>
            <div id="content" class="app-content">

                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;