import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

const navClass = `no-underline`

return (
    <div>
        <NavLink className={navClass} to={'/app/placeOrder'}> Place Order </NavLink>
    </div>
)
}

export default NavBar