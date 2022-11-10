import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AddedReviews from '../Reviews/AddedReviews';

const MyReviews = () => {

    useTitle('My Reviews')

    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])

    // get / read data by UserEmail -
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])

    // delete reviews - 
    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Are You Sure, You Want To Delete This Review?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingReview = reviews.filter(rvw => rvw._id !== id)
                        setReviews(remainingReview)
                    }
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                reviews.length > 0 ? reviews.map(customerRvw => <AddedReviews key={customerRvw._id} customerRvw={customerRvw}
                    handleDeleteReview={handleDeleteReview}></AddedReviews>)
                    :
                    <p className='text-3xl text-gray-400 my-32 col-span-4'>No reviews were added</p>
            }
        </div>
    );
};

export default MyReviews;