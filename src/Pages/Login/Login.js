import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex justify-center my-20'>
            <div className="p-4 w-full max-w-sm  rounded-lg border shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
                <form onSuspend={handleLogin} className="space-y-6">
                    <h5 className="text-xl font-medium text-white">LOG IN</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 rounded border bg-gray-700 border-gray-600" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-300">Remember me</label>
                        </div>
                        <span className="ml-auto text-sm text-blue-500 hover:underline cursor-pointer">Lost Password?</span>
                    </div>
                    <button type="submit" className="w-full btn btn-active btn-accent text-white font-medium rounded-lg text-center">Login</button>
                    <div className="text-sm font-medium text-gray-300">
                        Not registered? <Link to='/register' className="text-blue-500 hover:underline">Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;