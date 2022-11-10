import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section>
            <div className="mt-32">
                <h1 className="mb-4 text-7xl font-extrabold lg:text-9xl">404</h1>
                <p className="mb-4 text-4xl font-bold md:text-4xl">Something's missing.</p>
                <p className="mb-4 text-xl font-bold">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <Link to='/home'>
                    <button className='mt-10 btn btn-active btn-accent text-white'>Back to Homepage</button>
                </Link>
            </div>
        </section>
    );
};

export default Error;