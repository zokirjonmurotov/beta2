import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
function Navbar() {
    const navLinkStyles = ({isActive})=>({
        color:isActive ? '#4c8bf5':'grey',
        transition: '0.5s'
    })
  return (
    <>
    <div className="Navbar">
        <NavLink to='/' style={navLinkStyles} className={'Link'}>Home</NavLink>
        <NavLink to='Users' style={navLinkStyles} className={'Link'}>Users</NavLink>
        <NavLink to='posts' style={navLinkStyles} className={'Link'}>Posts</NavLink>
    </div>
    </>
  )
}

export default Navbar