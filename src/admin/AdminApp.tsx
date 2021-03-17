import React from "react";
import { Switch, Redirect } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar'
import AdminRoute from "../../src/admin/AdminRoute";
import AllOrders from '../admin/AdminOrders'
import SingleOrder from '../admin/SingleOrder'
const AdminApp = () => {
    return (
      <div className='flex'> 
       <AdminSidebar />
      <div className='w-full'>
        <Switch>
          <AdminRoute exact path='/app/admin/allOrders' component={AllOrders} />
          <AdminRoute exact path='/app/admin/allOrders/:id' component={SingleOrder} />
          <Redirect to='/app/admin' />
        </Switch>
      </div>
      </div>
    );
}
export default AdminApp