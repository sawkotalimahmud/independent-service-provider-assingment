import React from 'react';

const Service = ({service}) => {
    const{name, picture, price, description} = service;
    return (
        <div>
            <img src={picture} alt=""/>
            <h2>this is service: {name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </div>
    );
};

export default Service;