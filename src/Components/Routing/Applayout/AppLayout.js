import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <div>Footer</div>
        </>
    )
}

export default AppLayout;