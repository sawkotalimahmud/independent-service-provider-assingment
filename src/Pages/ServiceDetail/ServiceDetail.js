import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    const {name}= serviceId;
    return (
        <div>
            <h2 className='text-3xl font-medium'>Welcome to service detail {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;