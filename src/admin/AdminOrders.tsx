import React, { useState, useEffect } from "react";
import api from "../Api";
import Swal from "sweetalert2";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const AllOrders = () => {
const [orders, setOrders] = useState<any[]>([]);

useEffect(() => {
    async function fetchOrders() {
        const response = await api.allOrders();
        setOrders(response.allOrders);
    }
    fetchOrders();
 }, []);

 const singleOrder = (itemId: any) => {
   return orders.filter(x => x._id === itemId);
 }
 const fullFillOrder = async (orderId: any) => {
   try {
     await api.fullFillOrder(orderId);
     Swal.fire({
       icon: "success",
       title: "Order was updated sucessfully",
       showConfirmButton: false,
       timer: 3000
     });
     window.location.reload(false);
   } catch (error) {
     console.log("Failed to update order request...");
     console.log(error);
     Swal.fire({
       icon: "error",
       title: "Oops...",
       text: "Something went wrong! Please Try Again."
     });
   }

 }

 return (
   <div>
     <div className="text-gray-900 bg-gray-200">
       <div className="p-4 flex">
         <h1 className="text-3xl">Orders</h1>
       </div>
       <div className="px-3 py-4 flex justify-center">
         <table className="w-full text-md bg-white shadow-md rounded mb-4">
           <tbody>
             <tr className="border-b">
               <th className="text-left p-3 px-5">Name</th>
               <th className="text-left p-3 px-5">Email</th>
               <th className="text-left p-3 px-5">Phone</th>
               <th className="text-left p-3 px-5">Address</th>
               <th className="text-left p-3 px-5">Order</th>
               <th className="text-left p-3 px-5">Delivery Day</th>
               <th className="pl-28">Actions</th>
             </tr>
             {orders
               .filter(x => x.orderStatus === "active")
               .map(item => {
                 return (
                   <tr className="border-b hover:bg-orange-100 bg-gray-100">
                     <td className="p-3 px-5">{item.name}</td>
                     <td className="p-3 px-5">{item.email}</td>
                     <td className="p-3 px-5">{item.phone}</td>
                     <td className="p-3 px-5">
                       {item.address} {item.city} {item.state} {item.zip}
                     </td>
                     <td className="p-3 px-5">{item.order}</td>
                     <td className="p-3 px-5">{item.preferredDay}</td>
                     <td className="p-3 px-5">
                       <ExcelFile
                         filename="Orders"
                         element={
                           <button
                             type="button"
                             className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                           >
                             Export Order
                           </button>
                         }
                       >
                         <ExcelSheet data={singleOrder(item._id)} name="Order">
                           <ExcelColumn label="Name" value="name" />
                           <ExcelColumn label="Email" value="email" />
                           <ExcelColumn label="Phone" value="phone" />
                           <ExcelColumn label="Address" value="address" />
                           <ExcelColumn label="City" value="city" />
                           <ExcelColumn label="State" value="state" />
                           <ExcelColumn label="Zip" value="zip" />
                           <ExcelColumn label="Order" value="order" />
                           <ExcelColumn
                             label="Preferred Day"
                             value="preferredDay"
                           />
                         </ExcelSheet>
                       </ExcelFile>
                     </td>
                     <td className="p-3 px-5">
                       <button
                         onClick={(e) => fullFillOrder(item._id)}
                         type="button"
                         className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg"
                       >
                         Fullfill Order
                       </button>
                     </td>
                   </tr>
                 );
               })}
           </tbody>
         </table>
       </div>
     </div>
   </div>
 );
};

export default AllOrders;