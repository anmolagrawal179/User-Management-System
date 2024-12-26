import { useState } from 'react';
import Header from './Header';

import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { addUser } from '../services/UserService';

const AddUser=()=>{

const[name,setName]=useState('');
const[email,setEmail]=useState('');
const [age,setAge]=useState(0);
const [isUserAdded,setIsUserAdded]=useState(false);
const navigator=useNavigate();

const handleName=(e)=>
{
setName(e.target.value);
}

const handleEmail=(e)=>{
  setEmail(e.target.value)
}

const handleAge=(e)=>
{
  setAge(e.target.value);
}

const  saveUser=(e)=>
{
e.preventDefault();
const user={name,email,age};


addUser(user).then((response)=>{
    setIsUserAdded(true)
    setTimeout(() => {
    navigator('/user-list')
    }, 2000);

}).catch(error=>{
console.log(error);
})

};

    return(
<>
    <Header/>
<div className="container">

    <h4 className='text-center'>Add User</h4>
    
    {isUserAdded &&
    <div className='alert alert-success'> User added successfully...!</div>}
    
    <form>
  <div>
    <label for="name" className="form-label">User Name:</label>
    <input type="text" className="form-control" id="name" placeholder="Enter user name" value={name} onChange={handleName} name="name"/>
  </div>
  <br/>
  <div>
    <label for="email" class="form-label">User Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter user email" value={email} onChange={handleEmail} name="email"/>
  </div>
  <br/>
  <div>
    <label for="age" class="form-label">User Age:</label>
    <input type="number" className="form-control" id="age" placeholder="Enter user age" value={age} onChange={handleAge} name="age"/>
  </div>
  <br/>
  
  <button onClick={saveUser}type="submit" className="btn btn-success">Submit</button>
</form>

</div>
<Footer/>
</>
    );
}

export default AddUser;