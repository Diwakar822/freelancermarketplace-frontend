import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className='flex flex-wrap'>
            <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.description}</p>
      <p className="text-lg font-semibold text-gray-800">Price: ${service.price}</p>
      <p className="text-lg font-semibold text-gray-800">Category: {service.category}</p>
        </div>
        </div>
    );
};

export default ServiceCard;