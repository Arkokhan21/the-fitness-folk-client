import React from 'react';
import { Link } from 'react-router-dom'
import { PhotoView, PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceItem = ({ service }) => {

    const { title, img, price, description, _id } = service

    return (
        <div>
            <div className="card w-96 h-4/5 shadow-xl bg-slate-300">
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
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default ServiceItem;