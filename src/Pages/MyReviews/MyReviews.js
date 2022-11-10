import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AddedReviews from '../Reviews/AddedReviews';
import { toast } from 'react-hot-toast'

const MyReviews = () => {

    useTitle('My Reviews')

    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])

    // get / read data by UserEmail -
    useEffect(() => {
        fetch(`https://the-fitness-folk-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])

    // delete reviews - 
    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Are You Sure, You Want To Delete This Review?')
        if (proceed) {
            fetch(`https://the-fitness-folk-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully')
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
                    <p className='text-3xl text-gray-400 mt-32 mb-96 col-span-4'>No reviews were added</p>
            }
        </div>
    );
};

export default MyReviews;