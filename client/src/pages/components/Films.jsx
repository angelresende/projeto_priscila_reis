import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const porta = new URL("../../assets/images/porta.png", import.meta.url)

function Series() {
  return (
    <>
    <Row>
        <Col className='mt-2'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={porta} id='imageCard'/>
            <Card.Body>
                <Card.Title style={{fontSize: 16}}>A porta ao lado</Card.Title>
                <Card.Text> 
                Direção: Julia Rezende <br></br>
                Roteiro Patricia Corso, L.G. Bayão
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>    
     
    </Row>

    </>
    
  )
}

export default Series