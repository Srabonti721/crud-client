import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    console.log(user);

    const handleUpdateUser = e =>{
        e.preventDefault();
       const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = {name, email}
        console.log(updatedUser);

        fetch(`http://localhost:3000/users/${user._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                  console.log("update after:", data);
            }
        })
        
    }
    
    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input name='name' type="text" placeholder='name' defaultValue={user.name} /><br />
                <input name='email' type="email" placeholder='email' defaultValue={user.email} /><br />
                <input type="submit" value="edit user" />
            </form>
        </div>
    );
};

export default UpdateUser;