import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase-Config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import { Navigate } from "react-router-dom";

export const AuthContex = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loding,setLoding] = useState(true);

    //For Register authenticatin
    const registerUser = (email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //For update Profile
    const updateUserData = (updateData) =>{
        return updateProfile(auth.currentUser, (updateData))
    }
    //For Login user----------->
    const userLogin = (email,password)=>{
       setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //For Get login and register User ------------------>
    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                
                setUser(currentUser)
                setLoding(false)
            }else{
                setUser(null)
                setLoding(false)
                // console.log("Usser is logged out")
            }
        })

        return ()=>{
            unsubsCribe()
        }
    },[])



    // For user Logout----------------->
   const userLogout = ()=>{
    
    signOut(auth).then(()=>{
        setLoding(false)
        alert("SignOut Successfill");
    })
    .catch((error)=>{
        alert("something wents wrong")
    })
   }



    const profile = {
        user,
        loding,
        setLoding,
        registerUser,
        updateUserData,
        userLogin,
        userLogout
        
    }
    return <AuthContex.Provider value={profile}>{children}</AuthContex.Provider>
};

export default AuthProvider;
