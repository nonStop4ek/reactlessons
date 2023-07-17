import React from 'react';
import UserDetails from "../UserDetails/UserDetails";
import UserAdress from "../UserAdress/UserAdress";
import Company from "../company/company";

const User = ({user}) => {
    const {id,name,username,email,address,company} = user;
    return (
        <div>
            <UserDetails data={{name,id,username,email}}/>
            <UserAdress address={address}/>
            <Company company={company}/>
        </div>
    );
};

export default User;