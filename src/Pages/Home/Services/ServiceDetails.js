import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthProvider';

const ServiceDetails = () => {

    const { user } = useLoaderData(AuthContext)

    const { title, img, price, description, review, _id } = useLoaderData()

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])


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
                <Link to={`/customerreview/${_id}`} className="btn btn-active btn-accent text-white">Add A Review</Link>
            </div>
        </div>
    );
};

export default ServiceDetails;