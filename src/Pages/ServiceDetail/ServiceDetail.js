import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    console.log();
    return (
        <div>
            <h2 className='text-3xl mt-10 font-medium'>Welcome to service detail {serviceId}</h2>

            <h2 className='text-2xl mt-5 mb-96'>Thank You For Booking</h2>
        </div>
    );
};

export default ServiceDetail;