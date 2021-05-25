import React,{useState} from "react";
import TpFinalContext from "./tpFinalContext"

function EstadoGral(props){
    const[userLogin,setUserLogin]=useState(localStorage.getItem("login"));
    const[userInfo,setUserInfo]=useState(JSON.parse(localStorage.getItem("userInfo")))
    const loginUser=(user)=>{
        setUserLogin(true)
        localStorage.setItem("login",true)
        setUserInfo(user)
        localStorage.setItem("userInfo",JSON.stringify(user))
    }
    const logoutUser = ()=>{
        setUserLogin(false)
        localStorage.removeItem("login")
        setUserInfo({})
    }
    const isLogin=()=>{

    }
    return(
        <TpFinalContext.Provider
            value={{
                userLogin:userLogin,
                userInfo:userInfo,
                loginUser:loginUser,
                logoutUser:logoutUser
            }}
        >
            {props.children}
        </TpFinalContext.Provider>
    )
}
export default EstadoGral