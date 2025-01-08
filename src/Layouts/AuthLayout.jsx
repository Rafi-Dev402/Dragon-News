import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-Poppins bg-[#F3F3F3]">
            <header className="w-11/12 mx-auto pt-3 ">
                <Navbar />
            </header>
            <section className="w-11/12 mx-auto">
                <Outlet />
            </section>
        </div>
    );
};

export default AuthLayout;