import React from 'react';

const Users = () => {
    const handleForm = e =>{
        e.preventDefault();
        const name = e.target.name.value;
         const email = e.target.email.value;
         const users = {name, email};
         console.log(users);
         fetch('http://localhost:3000/users', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(users)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log('data after creating in db user :',data);
            
         })
         
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input name='name' type="text" placeholder='Name' /> <br />
                <input type="email" name="email" placeholder='Email' /> <br />
                <input type="submit" value="Add user" />
            </form>
            
        </div>
    );
};

export default Users;