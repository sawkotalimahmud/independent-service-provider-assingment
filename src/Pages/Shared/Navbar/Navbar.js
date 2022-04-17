import React, { useState } from 'react';
import Link from './Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen]= useState(false);
    
    const routes =[
        {id: 1, name:'Home', link: '/home'},
        {id: 2, name:'About', link: '/about'},
        {id: 3, name:'Login', link: '/login'}
    ]
    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open? <XIcon></XIcon>: <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center duration-500 ease-in absolute ${open ? 'top-6':'top-[-120px]'}`}>
                {
                    routes.map(route=><Link 
                        key={route.id}
                        route={route}
                         ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;