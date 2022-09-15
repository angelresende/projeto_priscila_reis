import React, { useState } from 'react'
import { Col, Card, Button, Row, Modal } from 'react-bootstrap'


const panco = new URL("../../assets/images/panco.png", import.meta.url)

function Comerciais() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Row>
      <Col className='mt-2'>
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={panco} id='imageCard'/>
          <Card.Body>
            <Card.Title>Comercial Panco</Card.Title>
            <Card.Text>
                Comercial Panco - Nasce uma memória
            </Card.Text>
            <Button 
              variant="dark" 
              onClick={handleShow}
            >
              <a href='#modalPanco' style={{textDecoration: 'none', color:'#fff'}}>
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
      id='modalPanco'
    >
      <Modal.Header closeButton>
        <Modal.Title>Comercial Panco</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <iframe 
        width="760" 
        height="350" 
        src="https://www.youtube.com/embed/31eyLEEdQ0Y" 
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

export default Comerciais