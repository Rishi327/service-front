import React, { useState, useEffect } from "react";
import api from "../Api";

const AllOrders = () => {
const [orders, setOrders] = useState('');
useEffect(() => {
    const response = api.allOrders()
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
    console.log(response)
 }, []);
 return (
     <div> <h1> Orders!!!!!</h1> </div>
 )
}

export default AllOrders