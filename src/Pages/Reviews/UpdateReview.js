import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const storedReview = useLoaderData()
    const [review, setReview] = useState(storedReview)

    const handleAddReview = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    alert('Update Successful')
                    event.target.reset()
                }
            })
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        const field = event.target.review
        const newReview = { ...review }
        newReview[field] = value
        setReview(newReview)
    }


    return (
        <div>
            <h2>Update Review</h2>
            <form onSubmit={handleAddReview}>
                <input onChange={handleInputChange} type='text' defaultValue={storedReview.review} name='review' className="textarea textarea-bordered w-4/6" placeholder="Update Review"></input>
                <div className='my-5'>
                    <button type="submit" className="btn btn-active btn-accent text-white">Update Review</button>
                </div>
            </form>
        </div>
    )

};

export default UpdateReview;