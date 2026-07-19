import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const user = useLoaderData();
    console.log(user);
    
    return (
        <div>
            <h2>user details page</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default Details;