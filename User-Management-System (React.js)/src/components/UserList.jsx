import { useState,useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { deleteUser, userList } from '../services/UserService';

const UserList=()=>{

    const[users,setUsers]=useState([]);
    const navigator=useNavigate();
   
    useEffect(()=>{
    getAllUsers()
    },[]);
   
    const getAllUsers=()=>
    {
        userList().then((response)=>{
            setUsers(response.data);
        }).catch(error=>{
            console.log(error)}) 
    }
    
    const editUser=(id)=>{
        navigator(`/update-user/${id}`)
    }
    
    const removeUser=(id)=>{
        console.log(id);
        deleteUser(id).then(response=>{
          getAllUsers();
        }).catch(error=>{
            console.log(error);
        })
    };

    return(
        <>
<Header/>
<div className="container">
    <h4 className='text-center'>User List</h4>
    <br/>
    <table className="table table-striped table-bordered">
        <thead className="table-dark">
            <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            
                {users.map(user=>
               <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                    <button onClick={()=>editUser(user.id)} className='btn btn-info' >Update</button>
                    <button onClick={()=>removeUser(user.id)} className='btn btn-danger' style={{marginLeft:10}}>Delete</button>
                </td>
            </tr>)}

        </tbody>
    </table>
</div>
<Footer/>

        </>
    );
}

export default UserList;