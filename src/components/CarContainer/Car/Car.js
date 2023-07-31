import React from 'react';

const Car = ({car,setOnSave,setCarForUpdate}) => {
    const {id,price,brand,year} = car;
    const deleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`,{method:'DELETE'}).then(()=>{
            setOnSave(prev=>!prev)
        })
    };
    return (
        <div>
            <div>id :{id}</div>
            <div>price :{price}</div>
            <div>brand :{brand}</div>
            <div>year :{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export {Car};