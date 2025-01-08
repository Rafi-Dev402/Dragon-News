import { Outlet } from "react-router-dom";
import CurrentDate from "../Components/CurrentDate";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftAside from "../Components/LeftAside";
import Navbar from "../Components/Navbar";
import RightAside from "../Components/RightAside";


const HomeLayout = () => {
    return (
        <div className="font-Poppins">
            <header>
                <Header />
                <div className="flex justify-center mt-2">
                    <CurrentDate />
                </div>
                <div className="w-10/12  mx-auto mt-7">
                    <LatestNews />
                </div>
            </header>
            <nav className="w-11/12   mx-auto mt-7">
                <Navbar />
            </nav>
            
                <main className="w-11/12 mx-auto mt-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 ">
                    <aside className=" col-span-6 md:col-span-6 lg:col-span-3 mx-auto md:mx-0 lg:mx-0  "><LeftAside /></aside>
                    <div className="  col-span-6 md:col-span-6 lg:col-span-6  "> <Outlet></Outlet></div>
                    <aside className="col-span-6 md:col-span-6 lg:col-span-3  mx-auto md:mx-0 lg:mx-0 "><RightAside /></aside>
                </main>
            
            <footer />
        </div>
    );
};

export default HomeLayout;