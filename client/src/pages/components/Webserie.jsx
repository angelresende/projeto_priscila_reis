import React, { useState } from 'react'
import { Col, Card, Button, Row, Modal } from 'react-bootstrap'

const stupidWife = new URL("../../assets/images/stupid_wife.jpg", import.meta.url)
const cronicas = new URL("../../assets/images/cronicas.png", import.meta.url)



function WebSeries() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Row>
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={stupidWife} id='imageCard'/>
          <Card.Body>
            <Card.Title>Stupid Wife</Card.Title>
            <Card.Text>
            Luíza vê em Valentina todos os defeitos que ela acredita que alguém pode ter, e a odeia. 
            Um dia, porém, Luíza acorda e se vê dez anos mais velha e, para seu horror, casada com Valentina.
            </Card.Text>
            <Button 
              variant="dark" 
              onClick={handleShow}
            >
              <a href='#modalStupidWife' style={{textDecoration: 'none', color:'#fff'}}>
                Assista aqui
              </a>
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cronicas} id='imageCard'/>
          <Card.Body>
            <Card.Title>Crônicas de uma separação</Card.Title>
            <Card.Text> 
            Quando você está nas profundezas do luto, da perda e do desgosto, as emoções 
            podem parecer incrivelmente esmagadoras e nem sempre são as mais fáceis de navegar. 
            </Card.Text>
            <Button 
              variant="dark" 
              onClick={handleShow}
            >
              <a href='#modalCronicas' style={{textDecoration: 'none', color:'#fff'}}>
                Assista aqui
              </a>
            </Button>
          </Card.Body>
        </Card>
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
      id='modalStupidWife'
    >
      <Modal.Header closeButton>
        <Modal.Title>Stupid Wife</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <iframe 
        width="760" 
        height="350" 
        src="https://www.youtube.com/embed/8fCUdj1Zl2A" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      >
      </iframe>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>

    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} 
      onHide={handleClose}
      id='modalCronicas'
    >
      <Modal.Header closeButton>
        <Modal.Title>Crônicas de uma separação</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <iframe 
        width="760" 
        height="350" 
        src="https://www.youtube.com/embed/XsqZerRhHkU" 
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

export default WebSeries