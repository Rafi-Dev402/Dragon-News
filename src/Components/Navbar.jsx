import { useContext } from "react";
import { FaUser } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import imgUser from "../assets/user.png"

const Navbar = () => {
    const login = useNavigate();
    const { user,  userLogout } = useContext(AuthContex)
    // console.log(user.photoURL)
    //For logout button
    const handleLogout = ()=>{
        userLogout()
        // console.log("signe out")
        
    }
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to={'/'} className="text-[#706F6F] text-base font-light">Home</NavLink></li>
                            <li><a>About</a></li>
                            <li><a>Career</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl  hidden md:hidden lg:block ">Hi! {user?.displayName}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><NavLink to={'/'} className="text-[#706F6F] text-base font-light">Home</NavLink></li>
                        {/* <li><a className="text-[#706F6F] text-base font-light">Home</a></li> */}
                        <li><a className="text-[#706F6F] text-base font-light">About</a></li>
                        <li><a className="text-[#706F6F] text-base font-light">Career</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        { 
                            (user?.photoURL) ? <img className="w-12 h-12 rounded-full mr-3" src={user?.photoURL} alt="" /> : <img src={imgUser} className=" rounded-full text-center border mr-3"></img>
                        }
                        {/* <button className="btn btn-circle text-center border mr-3"><FaUser className="text-xl md:text-xl lg:text-2xl" /></button> */}
                    </div>
                    {
                        (user) ?
                         <button onClick={handleLogout} className="bg-[#403F3F] px-5 py-2 text-white text-xl btn-neutral cursor-pointer font-semibold btn">
                            Log Out
                        </button> 
                        : 
                        <button className="bg-[#403F3F] px-5 py-2 text-white text-xl btn-neutral cursor-pointer font-semibold btn">
                            <Link to={"/auth/login"} >Log in</Link>
                        </button>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;