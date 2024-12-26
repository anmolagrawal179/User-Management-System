import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
  <div className="container-fluid">
    <ul className="navbar-nav">
    <Link className="navbar-brand" to="/">USER MANAGEMENT SYSTEM</Link>
      
     <li className="nav-item">
        <Link className="nav-link" to="/user-list">User List</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-user">Add User</Link>
      </li>
     
    </ul>
  </div>
</nav> 
<br/> 
        </>
    );
}

export default Header;