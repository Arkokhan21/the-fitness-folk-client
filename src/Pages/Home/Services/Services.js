import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ServiceItem from './ServiceItem';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-3xl my-20'>Packages</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:ml-56'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                        chobi={service.img}
                    ></ServiceItem>)
                }
            </div>
            <div className='text-center my-20'>
                <Link to='/services/all'><button className="btn btn-outline btn-accent">More Packages</button></Link>
            </div>
        </div>
    );
};

export default Services;