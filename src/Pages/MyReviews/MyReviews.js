import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import AddedReviews from '../Reviews/AddedReviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])

    // get / read data by UserEmail -
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                reviews.map(customerRvw => <AddedReviews key={customerRvw._id} customerRvw={customerRvw}></AddedReviews>)
            }
        </div>
    );
};

export default MyReviews;