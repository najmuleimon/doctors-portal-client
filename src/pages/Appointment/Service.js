import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date.</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;