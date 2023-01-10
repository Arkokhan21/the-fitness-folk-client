import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const UpdateReview = () => {
    const storedReview = useLoaderData()
    const [review, setReview] = useState(storedReview)

    const handleAddReview = (event) => {
        event.preventDefault()
        fetch(`https://the-fitness-folk-server.vercel.app/reviews/${review._id}`, {
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
                    toast.success('Update Successful')
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
            <h2 className='font-bold text-3xl my-5'>Update Your Review</h2>
            <form onSubmit={handleAddReview}>
                <input onChange={handleInputChange} type='text' defaultValue={storedReview.review} name='review' className="textarea textarea-bordered w-4/6"></input>
                <div className='mt-5 mb-96'>
                    <button type="submit" className="btn btn-active btn-accent text-white">Update Review</button>
                </div>
            </form>
        </div>
    )

};

export default UpdateReview;