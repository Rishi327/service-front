import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import {Redirect} from 'react-router-dom'
import Swal from "sweetalert2";
import auth from '../../src/Auth'
import api from "../Api"

type FormValues = {
  pass: string;
};
const AdminLogin = () => {
  const [adminLogin, setadminLogin] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>();
   useEffect(() => {
      setadminLogin(auth.isAdmin());
    }, []);
  const onSubmit = async (data: FormValues, e: any) => {
    try {
      const encrypted = await auth.encryptPass(data.pass)
      const updatedBody = {
         password: encrypted
      }       
      const { token } = await api.adminAuth(updatedBody)
      auth.expireCookie(token)
      auth.setCookie('token', token)
      auth.setCookie('isAdmin', 'true')
      setadminLogin(auth.isAdmin());
       } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! Please Try Again.`
      });
    }
    e.target.reset();
  };
  if (adminLogin) {
    return <Redirect to="/app/admin/" />;
  } 
  
  const AdminLoginForm = (
     <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          name="pass"
          ref={register}
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Password"
        />
        <button className="px-8 rounded-r-lg bg-blue-400  text-gray-800 font-bold p-4 uppercase border-blue-500 border-t border-b border-r">
          Login
        </button>
      </form>
  )
    return (
        <div>
          {(adminLogin ? <Redirect to='/app/admin/' /> : AdminLoginForm)}
        </div>
    )
};
export default AdminLogin
