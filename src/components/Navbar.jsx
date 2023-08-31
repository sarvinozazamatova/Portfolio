import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/Fa'


const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    return ( 
        <React.Fragment>
            <div className="navbar">
                <div className="logo">
                    <div className='co'>
                    <Link>
                    <h1 className='p'>Portfolio</h1>
                    </Link>
                    <div className={click ? "nav-menu.active" :
                "nav-menu"}>
                    <div className='rut'>
                    <Link className='h' to={"/"}>Logo</Link>
                    <NavLink className='h'  to={"/"}>Home</NavLink>
                    <NavLink className='h' to={"/about"}>About</NavLink>
                    <NavLink className='h' to={"/contact"}>Contact</NavLink>
                    
                    </div>
                    </div>
                    </div>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                    <FaTimes size={20} style={{color:"#fff"}} />
                    ):(
                  
                    <FaBars size={20} style={{color:"#fff"}} />
                    )}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Navbar;