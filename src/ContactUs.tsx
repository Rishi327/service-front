import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import NavBar from "./NavBar";
import api from "./Api";

export interface ContactBody {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
}
const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: ContactBody, e: any) => {
    console.log(data)
    try {
      await api.contactUs(data);
      Swal.fire({
        icon: "success",
        title: "Thank you for contacting us. We will get back to you shortly!",
        showConfirmButton: false,
        timer: 3000
      });
    } catch (error) {
      console.log("Failed to send contact request...");
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please Try Again."
      });
    }
    e.target.reset();
  };

  return (
    <div>
      <NavBar />
      <div className="container px-5 mt-10 mx-auto">
        <div>
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Have some questions?
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg ml-auto mr-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none border border-gray-400 block w-full text-gray-700 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jane"
                  required
                  ref={register}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none border border-gray-400 block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                  ref={register}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block border border-gray-400 w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                  required
                  ref={register}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none border border-gray-400 block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                  required
                  ref={register}
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition ease-in-out duration-300"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
