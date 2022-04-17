import React from 'react';

const Header = () => {
    return (
        <div>
            <h2 className='text-3xl'>This Is Header</h2>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;