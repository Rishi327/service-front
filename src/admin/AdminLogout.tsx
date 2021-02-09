import React, {useState} from 'react'
import { Redirect } from "react-router-dom";
import auth from '../Auth'

const Logout = () => {
    const [isLoggedOut, setIsloggedOut] = useState(false)
    const logoutHandler = () => {
        auth.expireCookie()
        setIsloggedOut(true)
    }
    return isLoggedOut ? (
      <Redirect to="/" />
    ) : (
      <span onClick={logoutHandler} className="ml-2 cursor-pointer">
        Logout
      </span>
    );
}

export default Logout 