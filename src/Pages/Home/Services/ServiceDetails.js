import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';

const ServiceDetails = () => {

    const { title, img, price, description, review } = useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mb-20'>
            <div className="card shadow-xl bg-slate-300 w-2/5 m-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="text-xl font-bold">${price}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                    review.map(rvw => <Reviews key={rvw.name} rvw={rvw}></Reviews>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;