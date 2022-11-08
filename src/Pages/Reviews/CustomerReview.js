import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const CustomerReview = () => {

    const { title, _id, service_id } = useLoaderData()

    const { user } = useContext(AuthContext)

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
        <form onSubmit={handleAddReview}>
            <textarea name='review' className="textarea textarea-bordered h-24 w-1/2" placeholder="Your Review"></textarea>
            <div className='my-5'>
                <button type="submit" className="btn btn-active btn-accent text-white">Add Review</button>
            </div>
        </form>
    );
};

export default CustomerReview;