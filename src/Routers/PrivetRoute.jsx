import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loding, setLoding } = useContext(AuthContex)
    // console.log(user)
    const location = useLocation();
    // console.log(location)

   
        if (loding) {
            return <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-dots loading-lg"></span>

            </div>
        }
   

    if (user) {
        return children
    }
    return <div>
       
        <Navigate state={location.pathname} to={'/auth/login'}></Navigate>

    </div>

};

export default PrivetRoute;