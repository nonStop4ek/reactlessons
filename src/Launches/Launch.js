import React from 'react';

const Launch = ({launch}) => {

    const {flight_number,mission_name,launch_year} = launch;
    return (
        <div>
            <div> flight number:{flight_number} </div>
            <div> mission name:{mission_name} </div>
            <div>launch year :{launch_year} </div>
        </div>
    );
};

export default Launch;