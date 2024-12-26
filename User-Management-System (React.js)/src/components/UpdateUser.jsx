import { useEffect, useState } from "react";
import Header from "./Header";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import { getUser, updateUser } from "../services/UserService";

const UpdateUser=()=>{

  const [name,setName]=useState('');
  const[age,setAge]=useState(0);
  const [email,setEmail]=useState('');
  const [isUserUpdated,setIsUserUpdated]=useState(false);
  const {id}=useParams();
  const navigator=useNavigate();

  const handleName=(e)=>{
    setName(e.target.value);
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }

  const handleAge=(e)=>{
    setAge(e.target.value);
  }

  const editUser=(e)=>{
    e.preventDefault();
    const user={name,email,age};
    
    updateUser(user,id).then((response)=>{
        setIsUserUpdated(true);
        setTimeout(() => {
        navigator('/user-list');   
        }, 2000);
  
    }).catch(error=>{
    console.log(error);
    })
  }

  useEffect(()=>{
    getUser(id).then(response=>{

setName(response.data.name);
setEmail(response.data.email);
setAge(response.data.age);     

console.log(id)
    }).catch(error=>{
      console.log(error)
    })
  },[id]);

    return (
<>
<Header/>
<div className="container">

    <h4 className="text-center">Update User</h4>
    
    {isUserUpdated &&
    <div className='alert alert-success'> User updated successfully...!</div>}
    <form>
  <div>
    <label for="name" className="form-label">User Name:</label>
    <input type="text" className="form-control" id="name"  value={name} onChange={handleName} name="name"/>
  </div>
  <br/>
  <div>
    <label for="email" class="form-label">User Email:</label>
    <input type="email" className="form-control" id="email"  value={email} onChange={handleEmail} name="email"/>
  </div>
  
  <br/>
  <div>
    <label for="age" class="form-label">User Age:</label>
    <input type="number" className="form-control" id="age"  value={age} onChange={handleAge} name="age"/>
  </div>
  <br/>
  
  <button onClick={editUser} type="submit" className="btn btn-success">Submit</button>
</form>

</div>
<Footer/>
</>
    );
}

export default UpdateUser;