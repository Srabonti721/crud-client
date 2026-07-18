import React, { use, useState }  from 'react';

const Users = ({userPromise}) => {
    const initialUser =  use(userPromise);
    const [users, setUsers] = useState(initialUser)
    console.log(initialUser);
    

    const handleForm = e =>{
        e.preventDefault();
        const name = e.target.name.value;
         const email = e.target.email.value;
         const newUser = {name, email};
         console.log(newUser);
         fetch('http://localhost:3000/users', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log('data after creating in db user :',data);
                  if(data.insertedId){
                    newUser._id = data.initialUser;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers)
                alert('user added successfully');
                e.target.reset()
            }
         })    
    }
             const handleUserDelete = (id) =>{
            console.log('user delete from database', id);
            fetch(`http://localhost:3000/users/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    const remainingUsers = users.filter((user)=>user._id !== id);
                    setUsers(remainingUsers)
                     console.log("after user delete" , data);  
                }
                
            })
            
         }
    return (
        <div>
            <h2>user : {initialUser.length}</h2>
            <form onSubmit={handleForm}>
                <input name='name' type="text" placeholder='Name' /> <br />
                <input type="email" name="email" placeholder='Email' /> <br />
                <input type="submit" value="Add user" />
            </form>
            {
              users.map((user)=><p key={user._id}>{user.name} = {user.email} <button onClick={()=>handleUserDelete(user._id)} className='btn'> X</button></p>)
            }
            
        </div>
    );
};

export default Users;