import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import { AddUser } from './Users/AddUser';
function App() {
  return (
   
      <div>
        <Router>
       <Navbar/>

       <Routes>
      <Route exact path="/"  element={<Home/>}/>
      <Route exact path="/adduser"  element={<AddUser/>}/>
       </Routes>
       


       </Router>
      </div>
  
  );
}

export default App;
