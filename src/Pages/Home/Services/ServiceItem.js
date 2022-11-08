import React from 'react';
import { Link } from 'react-router-dom'

const ServiceItem = ({ service }) => {

    const { title, img, price, description, _id } = service

    return (
        <div>
            <div className="card w-96 shadow-xl bg-slate-300">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="text-xl font-bold">${price}</h2>
                    <p>
                        {
                            description.length > 50 &&
                            description.slice(0, 50) + '...'
                        }
                    </p>
                    <Link to={`/services/${_id}`}><button className="btn btn-active btn-accent text-white">View Details</button></Link>
                </div>
                <figure><img src={img} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default ServiceItem;