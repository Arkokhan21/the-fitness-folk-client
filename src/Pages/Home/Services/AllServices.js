import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import AllServiceItem from './AllServiceItem';

const AllServices = () => {

    useTitle('All Packages')

    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('https://the-fitness-folk-server.vercel.app/services/all')
            .then(res => res.json())
            .then(data => setAllServices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className='mb-20'>
            <div className='text-center'>
                <p className='font-bold text-3xl mt-28 mb-20 underline'>ALL PACKAGES</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-4/5 mx-auto'>
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