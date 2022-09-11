import React from 'react'
import { Nav, Button } from 'react-bootstrap';


// const Quattro = new URL("../assets/images/logo-facebook.svg", import.meta.url)
const Instagram = new URL("../assets/images/logo-instagram.svg", import.meta.url)
const Twitter = new URL("../assets/images/logo-twitter.svg", import.meta.url)


function Header() {
  return (
    <Nav>
        <div className='div-header'>
            <div style={{display:'flex',flexDirection:'row',alignItems:'rigth'}}>
                {/* <a href="http://quattroagentes.com.br/" target="_blank"><img src={Quattro} /></a> */}
                <a href="https://www.instagram.com/priscilareis_/" target="_blank"><img src={Instagram} /></a>
                <a href="https://twitter.com/aPriReis" target="_blank"><img src={Twitter} /></a>
            </div>
            <Button href="/meus-trabalhos" variant="primary" size="lg" className='buttonWorks'>
                Meus trabalhos
            </Button>
        </div>    
    </Nav>
  )
}

export default Header