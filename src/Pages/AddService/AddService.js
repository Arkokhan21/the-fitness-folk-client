import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-hot-toast'

const AddService = () => {

    useTitle('Add Service')

    const { user } = useContext(AuthContext)

    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target
        const serviceAdderEmail = user?.email || 'undefined'
        const serviceAdderName = user?.displayName || 'undefined'
        const title = form.title.value
        const img = form.photoURL.value
        const price = form.price.value
        const description = form.description.value

        const AddedServiceDetails = {
            email: serviceAdderEmail,
            name: serviceAdderName,
            title,
            img,
            price,
            description
        }

        // send data to the database - (Post/Create)
        fetch('https://the-fitness-folk-server.vercel.app/addedservices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(AddedServiceDetails),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handleAddService} className='mb-36'>
            <h2 className='font-bold text-3xl my-5'>Add Service / Package</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-3'>
                <input name='title' type="text" placeholder="Service Title" className="input input-bordered input-lg w-full" required />
                <input name="photoURL" type="text" placeholder="Service Image" className="input input-bordered input-lg w-full" required />
                <input name='price' type="text" placeholder="Service Price" className="input input-bordered input-lg w-full" required />
            </div>
            <textarea name='description' className="textarea textarea-bordered h-32 w-full mt-5" placeholder="Service Description" required></textarea>
            <input className="btn btn-active btn-accent text-white mt-5" type="submit" value="Add Service" />
        </form>
    );
};

export default AddService;