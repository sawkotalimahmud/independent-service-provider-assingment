import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-between sticky'>
            <nav className='gap-10 text-2xl font-medium	m-6'>
            <CustomLink to="/">Plumber David</CustomLink>
            </nav>
            <nav className='flex justify-center gap-10 text-2xl font-medium	m-6'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </nav>           
        </div>
    );
};

export default Header;