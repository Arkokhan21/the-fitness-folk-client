import React from 'react';
import { Link } from 'react-router-dom'
import { FaCheckDouble } from "react-icons/fa";

const Header = () => {
    return (
        <div className="navbar bg-slate-300 p-3 mb-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link>Blog</Link></li>
                        <li> <Link className="btn btn-active btn-accent text-white">Login</Link></li>
                    </ul>
                </div>
                <FaCheckDouble className='text-xl mr-2'></FaCheckDouble> <Link className="text-xl font-bold">The Fitness Folk</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link className='ml-5'>Blog</Link></li>
                    <li><Link className="btn btn-active btn-accent text-white ml-5">Login</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Header;