import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody,MDBContainer } from 'mdb-react-ui-kit';
import axios from "axios";


export default function App() {

const [users,setUsers]=useState([]);

useEffect(()=>{
  
   loadUsers();
},[])

const loadUsers = async ()=>{

  const result = await  axios.get("http://localhost:8080/users");
  setUsers(result.data);
}

  return (
    <MDBContainer>
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Username</th>
          <th scope='col'>Email</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
        users.map((user,index) =>(
          <tr>
          <th scope='row' key={index}>{index+1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          
          <td>
            <button className="btn btn-primary mx-2">View</button>
            <button className="btn btn-outline-primary mx-2">Edit</button>
            <button className="btn btn-danger mx-2">Delete</button>
          </td>
        </tr>
        
        ))
       }
       
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
  );
}