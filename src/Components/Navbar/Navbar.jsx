import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='h-20 flex items-center justify-center'>
            <Link className='px-4 font-bold text-xl text-gray-600' to={'/'}>Home</Link>
            <Link className='px-4 font-bold text-xl text-gray-600' to={'/reviews'}>Reviews</Link>
            <Link className='px-4 font-bold text-xl text-gray-600' to={'/blogs'}>Blogs</Link>
            <Link className='px-4 font-bold text-xl text-gray-600' to={'/dashboard'}>Dashboard</Link>
            <Link className='px-4 font-bold text-xl text-gray-600' to={'/about'}>About</Link>
        </nav>
    );
};

export default Navbar;