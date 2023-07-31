import React from 'react';

const Car = ({car}) => {
    const {id,price,brand,year} = car;
    return (
        <div>
            <div>id :{id}</div>
            <div>price :{price}</div>
            <div>brand :{brand}</div>
            <div>year :{year}</div>
        </div>
    );
};

export {Car};