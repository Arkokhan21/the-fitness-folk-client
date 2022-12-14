import React from 'react';
import { Link } from 'react-router-dom';

const AddedReviews = ({ customerRvw, handleDeleteReview }) => {

    const { photoURL, review, reviewer, packageName, _id } = customerRvw

    return (
        <div className='flex flex-col'>
            <div className="px-4 py-12 rounded-t-lg bg-gray-900">
                <p className="relative px-6 py-6 text-lg italic text-center text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-indigo-400">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>{review}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-indigo-400">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-300 text-gray-900 h-60">
                <img src={photoURL} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-700" />
                <p className="text-xl font-semibold leading-tight">{reviewer}</p>
                <p className="text-xl font-semibold leading-tight text-gray-700">Package: {packageName}</p>
                <div className='my-5'>
                    <Link to={`/reviews/${_id}`}><button className='btn btn-active btn-accent text-white mr-5 mb-5'>Edit Review</button></Link>
                    <button onClick={() => handleDeleteReview(_id)} className='btn btn-active btn-accent text-white'>Delete Review</button>
                </div>
            </div>
        </div>
    );
};

export default AddedReviews;