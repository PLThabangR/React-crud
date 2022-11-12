
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
  return (
    <div>
              <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Crud app</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          
          <Link className='btn btn-outline-white mx-2' to="/adduser">Add user</Link>
         
        </MDBContainer>
        
       
        
       
       
        

        
        

      </MDBNavbar>

    </div>
  )
}
