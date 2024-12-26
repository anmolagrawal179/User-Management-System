import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import PageNotFound from './components/PageNotFound';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/' element={<UserList/>}/>
          <Route path='/user-list' element={<UserList/>}/>
           
          <Route path="/add-user" element={<AddUser/>}/>

          <Route path="/update-user/:id" element={<UpdateUser/>}/>
           
         
          <Route path='*' element={<PageNotFound/>}/>
            
      
        </Routes>
      </Router>
     
    </>
  );
}

export default App;