import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
