import React from "react";
import { Switch, Redirect } from "react-router-dom";
import AdminSidebar from '../admin/AdminSidebar'
import AdminRoute from "../../src/admin/AdminRoute";
import AllOrders from '../admin/AdminOrders'
const AdminApp = () => {
    return (
      <div>
       <AdminSidebar />
      
      <div>
        <Switch>
          <AdminRoute exact path='/app/admin/allOrders' component={AllOrders} />
          <Redirect to='/app/admin' />
        </Switch>
      </div>
      </div>
    );
}
export default AdminApp