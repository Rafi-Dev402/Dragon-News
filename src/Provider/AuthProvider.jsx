import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase-Config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { Navigate } from "react-router-dom";

export const AuthContex = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    //For Register authenticatin
    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //For Login user----------->
    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //For Get login and register User ------------------>
    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                // console.log("login user",currentUser)
                setUser(currentUser)
                
                
            }else{
                console.log("Usser is logged out")
            }
        })

        return ()=>{
            unsubsCribe()
        }
    },[])



    // For user Logout----------------->
   const userLogout = ()=>{
    signOut(auth).then(()=>{
        alert("SignOut Successfill");
        setUser(null)
    })
    .catch((error)=>{
        alert("something wents wrong")
    })
   }



    const profile = {
        user,
        registerUser,
        userLogin,
        userLogout
        
    }
    return <AuthContex.Provider value={profile}>{children}</AuthContex.Provider>
};

export default AuthProvider;
