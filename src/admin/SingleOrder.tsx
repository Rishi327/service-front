import React, { useState, useEffect } from "react";
import api from "../Api";

interface IProps {
  match: {params: {id: string}}
}

const SingleOrder = (props: IProps) => {
  const [singleOrder, setSingleOrder] = useState<any[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.allOrders();
      setSingleOrder(response.allOrders);
    }
    fetchOrders();
  }, []);
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
                <th className="text-left p-3 px-5">Store</th>
                <th className="text-left p-3 px-5">Actions</th>
                <th></th>
              </tr>
              {singleOrder.filter(x => x._id === props.match.params.id).map(item => {
                return (
                  <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5">{item.name}</td>
                    <td className="p-3 px-5">{item.email}</td>
                    <td className="p-3 px-5">{item.phone}</td>
                    <td className="p-3 px-5">
                      {item.address} {item.city} {item.state} {item.zip}
                    </td>
                    <td className="p-3 px-5">{item.order}</td>
                    <td className="p-3 px-5">
                      {item.preferredStore
                        ? item.preferredStore
                        : "No store was selected"}
                    </td>
                    <td className="p-3 px-5">
                  
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

export default SingleOrder;
