import React from 'react'
import { Navbar, Container, Col, Button, Stack } from 'react-bootstrap';


// const Quattro = new URL("../assets/images/logo-facebook.svg", import.meta.url)
const Instagram = new URL("../assets/images/logo-instagram.svg", import.meta.url)
const Twitter = new URL("../assets/images/logo-twitter.svg", import.meta.url)


function Header() {
  return (
    <Navbar expand="lg">
    <Container>
    <Col className='div-header'>
      <Stack direction="horizontal" gap={2}>
        <Button 
          href="https://www.instagram.com/priscilareis_/" 
          target="_blank" 
          variant="dark" 
          size="lg"
          style={{textDecoration: 'none', color:'#fff'}}
        >
          <img src={Instagram} />
        </Button>
        <Button 
          href="https://twitter.com/aPriReis" 
          target="_blank" 
          variant="dark" 
          size="lg"
          style={{textDecoration: 'none', color:'#fff'}}
        >
          <img src={Twitter} />
        </Button>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <Button 
            href="/" 
            variant="dark" 
            size="lg"
            style={{textDecoration: 'none', color:'#fff'}}
          >
              Home
          </Button>  
          <Button 
            href="/meus-trabalhos" 
            variant="dark" 
            size="lg"
            style={{textDecoration: 'none', color:'#fff'}}
          >
              Meus trabalhos
          </Button> 
      </Stack>                   
      </Col>       
    </Container>
    </Navbar>
  )
}

export default Header