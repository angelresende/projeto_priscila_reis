import React from 'react'
import { Col, Card, Button, Row } from 'react-bootstrap'

const stupidWife = new URL("../../assets/images/stupid_wife.jpg", import.meta.url)
const cronicas = new URL("../../assets/images/cronicas.png", import.meta.url)


function WebSeries() {
  return (
  <Row>
    <Col className='mt-2'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={stupidWife} id='imageCard'/>
        <Card.Body>
          <Card.Title>Stupid Wife</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" style={{}}>Assista aqui</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col className='mt-2'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cronicas} id='imageCard'/>
        <Card.Body>
          <Card.Title>Crônicas de uma separação</Card.Title>
          <Card.Text>
          Casamento, divórcio, fim de namoro, amor, dor, questionamentos e superação. 
          </Card.Text>
          <Button variant="primary" style={{}}>Assista aqui</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col className='mt-2'>
    </Col>
    <Col className='mt-2'>
    </Col>
  </Row>
  

    
  )
}

export default WebSeries