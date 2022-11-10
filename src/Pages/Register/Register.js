import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-hot-toast'

const Register = () => {
    useTitle('Register')

    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Register Successful')
                form.reset()
                handleUpdateUserProfile(name, photoURL)
            })
            .catch(err => console.error(err))
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex justify-center my-20'>
            <div className="p-4 w-full max-w-sm  rounded-lg border shadow-md sm:p-6 md:p-8 bg-gray-800 border-gray-700">
                <form onSubmit={handleRegister} className="space-y-6">
                    <h5 className="text-xl font-medium text-white">REGISTER</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                        <input type="text" name="name" id="name" className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name" required />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-300">PhotoURL</label>
                        <input type="text" name="photoURL" id="photoURL" className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="photoURL" required />
                    </div>
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
                    </div>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-400">Signup with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-accent text-white'><FaGoogle></FaGoogle></button>
                        <button className='btn btn-outline btn-accent text-white'><FaTwitter></FaTwitter></button>
                        <button className='btn btn-outline btn-accent text-white'><FaFacebook></FaFacebook></button>
                    </div>
                    <button type="submit" className="w-full btn btn-active btn-accent text-white font-medium rounded-lg text-center">Register</button>
                    <div className="text-sm font-medium text-gray-300">
                        Already have an account? <Link to='/login' className="text-blue-500 hover:underline">Please Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;