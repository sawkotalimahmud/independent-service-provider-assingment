import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut =()=>{
        signOut(auth)
    }

    return (
        <div className='flex justify-between sticky'>
            <nav className='gap-5 text-2xl font-medium	m-4'>
            <CustomLink to="/">Plumber David</CustomLink>
            </nav>
            <nav className='flex justify-center gap-5 text-2xl font-medium	m-4'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                {
                    user ?
                    <CustomLink to={"/"} onClick={handleSignOut} >Sing Out</CustomLink>
                    :
                    <CustomLink to="/login">Login</CustomLink>
                }
            </nav>           
        </div>
    );
};

export default Header;