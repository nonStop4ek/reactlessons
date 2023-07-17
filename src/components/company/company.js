import React from 'react';

const Company = (company) => {
    const {name,catchPhrase} = company;
    return (
        <div>
        <div>name:{name}</div>
        <div>catchPhrase:{catchPhrase}</div>
        </div>
    );
};

export default Company;