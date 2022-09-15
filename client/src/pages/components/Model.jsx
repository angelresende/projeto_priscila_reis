import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const aguaDoce = new URL("../../assets/images/agua-doce.png", import.meta.url)
const esprit = new URL("../../assets/images/espirit.png", import.meta.url)
const mofficer = new URL("../../assets/images/mofficer.png", import.meta.url)
const zeea = new URL("../../assets/images/zeea.png", import.meta.url)
const peepou = new URL("../../assets/images/peepou.png", import.meta.url)
const floresMello = new URL("../../assets/images/floresMello.png", import.meta.url)
const solJaneiro = new URL("../../assets/images/solJaneiro.png", import.meta.url)
const maraMac = new URL("../../assets/images/maraMac.png", import.meta.url)

function Model() {
  return (
    <>
    <Row>
    <Col className='mt-2'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={aguaDoce} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Agua Doce Moda Praia</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={esprit} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Esprit</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mofficer} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>M Officer </Card.Title>
            </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={zeea} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Zeea</Card.Title>
            </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
    <Col className='mt-2'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={peepou} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Peepou</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={floresMello} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Flores de Mello</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={solJaneiro} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Sol de Janeiro </Card.Title>
            </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={maraMac} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Mara Mac</Card.Title>
            </Card.Body>
        </Card>
      </Col>
    </Row>

    </>
    
  )
}

export default Model