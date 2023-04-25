import { Navbar } from 'react-bootstrap';


/* --------------------------- Navbar for project --------------------------- */
export default function NavbarBullseye(){

    return(
        <Navbar variant="dark" expand={true} style={{paddingLeft:'2vw',paddingRight:'5vw',paddingTop:'3vh',paddingBottom:'3vh',backgroundColor:'#b1040c'}}>
            <img
              src="../../bullseye-logo-1.png"
              width="200"
              height="80"
              className="d-inline-block align-top"
              style={{backgroundColor:'white',padding:'12px',borderRadius:'15px'}}
              alt="Bullseye Logo"
            />
        </Navbar>
    )
}