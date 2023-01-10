import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
    const { logout, user } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className="navbar bg-slate-300 p-3 mb-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home' className='ml-5'>Home</Link></li>
                        <li><Link to='/blog' className='ml-5'>Blog</Link></li>
                        {user?.photoURL ?
                            <>
                                <li><Link to='/myreviews' className='ml-5'> My Reviews</Link></li>
                                <li><Link to='/addservice' className='ml-5'>Add Service</Link></li>
                                <Link onClick={handleLogout} className='btn btn-active btn-accent text-white ml-5'>
                                    Log Out
                                </Link>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn btn-active btn-accent text-white ml-5">
                                    Login
                                </Link>
                            </>}
                    </ul>
                </div>
                <img className='h-14 lg:ml-32' src="https://www.svgrepo.com/show/425482/fitness-workout-healthy.svg" alt="" />
                <Link to='/' className="text-2xl font-bold ml-5">The Fitness Folk</Link>
            </div>
            <div className="navbar-center hidden lg:flex ml-32">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blog' className='ml-5'>Blog</Link></li>
                    {user?.photoURL ?
                        <>
                            <li><Link to='/myreviews' className='ml-5'> My Reviews</Link></li>
                            <li><Link to='/addservice' className='ml-5'>Add Service</Link></li>
                            <Link onClick={handleLogout} className='btn btn-active btn-accent text-white ml-5'>
                                Log Out
                            </Link>
                            <div className="avatar">
                                <div className="mask mask-squircle h-9 mt-1 ml-5">
                                    <img className='' src={user?.photoURL} alt="" />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn btn-active btn-accent text-white ml-5">
                                Login
                            </Link>
                        </>}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Header;