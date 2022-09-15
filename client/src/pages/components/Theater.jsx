import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const cartas = new URL("../../assets/images/cartas-para-minhas-irmas.png", import.meta.url)
const infantis = new URL("../../assets/images/infantis.png", import.meta.url)
const mulan = new URL("../../assets/images/mulan.png", import.meta.url)

function Theater() {
  return (
    <Row>
        <Col className='mt-2'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cartas} id='imageCard'/>
            <Card.Body>
              <Card.Title>Cartas para minhas irmãs</Card.Title>
              <Card.Text>
              Direção Myriam Pérsia.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-2'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={infantis} id='imageCard'/>
            <Card.Body>
              <Card.Title>Infantis</Card.Title>
              <Card.Text> 
              Direção: Luciana Coutinho
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mulan} id='imageCard'/>
            <Card.Body>
              <Card.Title>Mulan</Card.Title>
              <Card.Text> 
              Direção: Luana Define
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  )
}

export default Theater