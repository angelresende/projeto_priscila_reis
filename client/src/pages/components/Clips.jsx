import React, { useState } from 'react'
import { Col, Card, Button, Row, Modal } from 'react-bootstrap'


const naveia = new URL("../../assets/images/naveia.png", import.meta.url)

function Clips() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Row>
      <Col className='mt-2'>
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={naveia} id='imageCard'/>
          <Card.Body>
            <Card.Title>Clipe - Na Veia | Banda Eddie</Card.Title>
            <Card.Text>
            Na Veia - Banda Eddie - Album: Atiça<br></br>
            Composição: Emerson Calado e Lirinha
            </Card.Text>
            <Button 
              variant="dark" 
              onClick={handleShow}
            >
              <a href='#modalNaVeia' style={{textDecoration: 'none', color:'#fff'}}>
                Assista aqui
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
      </Col>
      <Col className='mt-2'>
      </Col>
    </Row>


    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} 
      onHide={handleClose}
      id='modalNaVeia'
    >
      <Modal.Header closeButton>
        <Modal.Title>Clipe - Na Veia | Banda Eddie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <iframe 
        width="760" 
        height="350" 
        src="https://www.youtube.com/embed/98w5OFJWZ0w" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      >
      </iframe>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
    
    </>
  
    
    
  )
}

export default Clips