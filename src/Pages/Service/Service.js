import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const {id, name, picture, price, description } = service;

  const navigate = useNavigate();
  const serviceDetailBtn = id =>{
    navigate(`/service/${name}`)
  }
  return (
    <div>
      <div className="card card-compact w-100% h-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>Price: ${price}</h3>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>serviceDetailBtn(name)} className="btn btn-black">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
