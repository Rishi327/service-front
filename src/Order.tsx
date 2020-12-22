import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import api from './Api'

export interface OrderBody {
  name: string,
  email: string,
  phone: string,
  address: string,
  city: String,
  state: String,
  zip: String,
  order: string,
  preferredStore: string,
}
const Order = () => {                             
  const { register, handleSubmit} = useForm();
  const listClass = 'font-semibold w-40 ml-6 text-md tracking-wide'
    const onSubmit = async (data: OrderBody, e: any) => {
        data.state = 'MO'
        try {
          const placeOrder = await api.placeOrder(data)
          Swal.fire({
            icon: 'success',
            title: 'Your Order was placed sucessfully',
            showConfirmButton: false,
            timer: 3000
          })
        } catch(error){
          console.log('Failed to send order request...')
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please Try Again.',
          })
        }
        e.target.reset()
  }
  
    return (
      <div className="relative flex items-top justify-center mt-20 bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Groceries Delivered
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to place your order
                </p>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <ul className="list-disc">
                    <li className={listClass}>Place order</li>
                    <li className={listClass}>We will shop</li>
                    <li className={listClass}>Pay on delivery</li>
                  </ul>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    autoFocus
                    required
                    placeholder="Full Name"
                    ref={register}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    placeholder="Email"
                    ref={register}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="Phone Number"
                    ref={register}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="address" className="hidden">
                    Street
                  </label>
                  <input
                    type="address"
                    name="address"
                    required
                    id="address"
                    ref={register}
                    placeholder="Street Address"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex grid grid-cols-3 gap-4 mt-2">
                  <label htmlFor="city" className="hidden">
                    City
                  </label>
                  <input
                    type="city"
                    name="city"
                    required
                    id="city"
                    placeholder="City"
                    ref={register}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                  <label htmlFor="state" className="hidden">
                    State
                  </label>
                  <input
                    type="state"
                    name="state"
                    disabled
                    id="state"
                    value="MO"
                    placeholder="State"
                    ref={register}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                  <label htmlFor="zip" className="hidden">
                    Zip
                  </label>
                  <input
                    type="zip"
                    required
                    name="zip"
                    id="zip"
                    placeholder="Zip"
                    ref={register}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="order" className="hidden">
                    Order
                  </label>
                  <textarea
                    name="order"
                    required
                    placeholder="What would you like to order?"
                    ref={register}
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></textarea>
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Preferred Grocery Store
                  </label>
                  <select
                    name="preferredStore"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    ref={register}
                  >
                    <option value="">Preferred Grocery Store</option>
                    <option value="seema">Seema</option>
                    <option value="desi-bazaar">Desi Bazaar</option>
                  </select>
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Terms and Conditions
                  </label>
                  <div className="flex">
                    <div>
                      <input
                        type="checkbox"
                        required={true}
                        name="terms"
                        ref={register}
                      />
                    </div>
                    <div className="pl-2">
                      I agree to GGhar{" "}
                      <span
                        className="text-blue-800 cursor-pointer	"
                        onClick={() => {
                          Swal.fire({
                            title: "Terms of Service",
                            text: "asdfjalsdjflajsdlfjalsdfjlasjdflajdslfjalsjdlajsdlfjalsdjflajsdflajsdlfjalsdjflajsdflajsdlfj"
                          });
                        }}
                      >
                        {" "}
                        Terms of Service{" "}
                      </span>{" "}
                      and{" "}
                      <span
                        className="text-blue-800 cursor-pointer	"
                        onClick={() => {
                          Swal.fire({
                            title: "Privacy Policy",
                            html: '<h1> yeah!! </h1>'
                          });
                        }}
                      >
                        {" "}
                        Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Order