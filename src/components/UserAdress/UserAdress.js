import React from 'react';

const UserAdress = ({address}) => {
    const {street,city} = address;
    return (
        <div>
            <div>street:{street}</div>
            <div>city:{city}</div>
        </div>
    );
};

export default UserAdress;