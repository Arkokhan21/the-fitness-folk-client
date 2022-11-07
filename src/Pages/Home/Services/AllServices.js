import React, { useEffect, useState } from 'react';
import AllServiceItem from './AllServiceItem';

const AllServices = () => {

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services/all')
            .then(res => res.json())
            .then(data => setAllServices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='mb-20'>
            <div className='text-center'>
                <p className='font-bold text-3xl my-20'>All Packages</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-56'>
                {
                    allServices.map(allService => <AllServiceItem
                        key={allService._id}
                        allService={allService}
                    ></AllServiceItem>)
                }
            </div>
        </div>
    );
};

export default AllServices;