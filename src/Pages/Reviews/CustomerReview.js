import React from 'react';
// import { useLoaderData } from 'react-router-dom';

const CustomerReview = () => {

    // const { title, img, price, description, review, _id } = useLoaderData()

    return (
        <div>
            <textarea className="textarea textarea-bordered h-24 w-1/2" placeholder="Your Review"></textarea>
            <div className='my-5'>
                <button className="btn btn-active btn-accent text-white">Add Review</button>
            </div>
        </div>
    );
};

export default CustomerReview;