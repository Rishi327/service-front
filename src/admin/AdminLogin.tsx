import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Auth from '../Auth'
type FormValues = {
  pass: string;
};

const AdminLogin = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = async (data: FormValues, e: any) => {

    try {
      Auth.encryptPass(data.pass)
    } catch (error) {
      console.log("Failed to login to admin");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! Please Try Again. ${error}`
      });
    }
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     
          <input
            type='password'
            name='pass'
            ref={register}
            className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="Password"
          />
          <button className="px-8 rounded-r-lg bg-blue-400  text-gray-800 font-bold p-4 uppercase border-blue-500 border-t border-b border-r">
            Login
          </button>
     
     
    </form>
  );
};
export default AdminLogin
