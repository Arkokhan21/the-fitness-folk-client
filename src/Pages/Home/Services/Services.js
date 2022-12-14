import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ServiceItem from './ServiceItem';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://the-fitness-folk-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-3xl mt-28 mb-20 underline'>PACKAGES</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-4/5 mx-auto'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                        chobi={service.img}
                    ></ServiceItem>)
                }
            </div>
            <div className='text-center mb-28'>
                <Link to='/services/all'><button className="btn btn-outline btn-accent">More Packages</button></Link>
            </div>
        </div>
    );
};

export default Services;