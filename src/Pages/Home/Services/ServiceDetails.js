import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Contexts/AuthProvider';
import SpecificAddedReview from '../../Reviews/SpecificAddedReview';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext)

    const { title, img, price, description, review, _id, service_id } = useLoaderData()

    const [AddedReviews, setAddedReviews] = useState([])

    // get / read data by packageId - 
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?package=${_id}`)
            .then(res => res.json())
            .then(data => setAddedReviews(data))
            .catch(err => console.error(err))
    }, [_id])


    const handleAddReview = (event) => {
        event.preventDefault()
        const form = event.target
        const review = form.review.value
        const reviewerEmail = user?.email || 'undefined'
        const reviewerName = user?.displayName || 'undefined'
        const reviewerphotoURL = user?.photoURL || 'undefined'

        const reviewerDetails = {
            package: _id,
            packageName: title,
            packageId: service_id,
            reviewer: reviewerName,
            email: reviewerEmail,
            photoURL: reviewerphotoURL,
            review
        }
        // send data to the database - (Post/Create)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewerDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added. Thank You')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mb-20'>
            <div className="card shadow-xl bg-slate-300 w-2/5 m-auto ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="text-xl font-bold">${price}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div>
                    {
                        review.map(rvw => <Reviews key={rvw.name} rvw={rvw}></Reviews>)
                    }
                </div>

                <div>
                    {
                        AddedReviews.map(addedrvw => <SpecificAddedReview key={addedrvw._id} addedrvw={addedrvw}></SpecificAddedReview>)
                    }
                </div>

                <div>
                    {
                        user?.email ?
                            <form onSubmit={handleAddReview}>
                                <textarea name='review' className="textarea textarea-bordered w-4/6" placeholder="Your Review"></textarea>
                                <div className='my-5'>
                                    <button type="submit" className="btn btn-active btn-accent text-white">Add Review</button>
                                </div>
                            </form>
                            :
                            <span>Please <Link to='/login'><p className='font-bold text-blue-500 '>Login</p></Link> to add a review</span>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;