import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navLinkStyles = ({isActive})=>({
        color:isActive ? 'red':'black'
    })



    return (
        <div style={{
            width:'100%',
            background:'lightgreen',
            padding:"20px",
            display:'flex',
            gap:'50px'
        }}>
            <NavLink style={navLinkStyles} to='/' >
            Home page
            </NavLink>
            <NavLink style={navLinkStyles} to='/about' >
            About page
            </NavLink>
        </div>
    );
}

export default Header;
