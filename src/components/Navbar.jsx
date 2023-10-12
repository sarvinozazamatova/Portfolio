import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    return ( 
        <React.Fragment>
            <div className="navbar">
                <div className="logo">
                    <div className='co'>
                    <Link>
                    <h1 className='p'>𝕻𝖔𝖗𝖙𝖎𝖋𝖔𝖑𝖎</h1>
                    </Link>
                    <div className={click ? "nav-menu.active" :"nav-menu"}>
                    <div className='rut'>
                    {/* <Link className='h' to={"/"}>Logo</Link> */}
                    <NavLink className='h'  to={"/"}>Home</NavLink>
                    <NavLink className='h' to={"/about"}>About</NavLink>
                    <NavLink className='h' to={"/contact"}>Contact</NavLink>
                    
                    </div>
                    </div>
                    </div>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                    <button>x</button>
                    ):(
                  
                   <button>=</button>
                    )}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Navbar;
