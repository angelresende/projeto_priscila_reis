import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

const kiss = new URL("../../assets/images/kiss.png", import.meta.url)
const especial220volts = new URL("../../assets/images/especial-220-volts.png", import.meta.url)
const amorSemIgual = new URL("../../assets/images/amor-sem-igual.png", import.meta.url)
const curtaSundace = new URL("../../assets/images/curta-sundace.png", import.meta.url)
const espelhoDaVida = new URL("../../assets/images/espelho-da-vida.png", import.meta.url)
const perrengue = new URL("../../assets/images/perrengue.png", import.meta.url)
const luciaMcCartney = new URL("../../assets/images/lucia-mc-cartney.png", import.meta.url)
const leiDoAmor = new URL("../../assets/images/a-lei-do-amor.png", import.meta.url)
const verdadesSecretas = new URL("../../assets/images/verdades-secretas.png", import.meta.url)
const camaDeGato = new URL("../../assets/images/cama-de-gato.png", import.meta.url)

function Series() {
  return (
    <>
    <Row>
    <Col className='mt-2'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={kiss} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Todo Dia a Mesma Noite</Card.Title>
            <Card.Text> 
            Inspirada na história real do incêndio da boate Kiss.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={especial220volts} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Especial 220volts Paulo Gustavo</Card.Title>
            <Card.Text>
            <br></br>
            Globo, 2020.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={amorSemIgual} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Amor sem Igual </Card.Title>
              <Card.Text> 
              <br></br>
              Record, 2020. 
              </Card.Text>

            </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={curtaSundace} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Curta Sundance</Card.Title>
              <Card.Text> 
              <br></br>
              Sundance Festival, 2019. 
              </Card.Text>
            </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={espelhoDaVida} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Espelho da Vida</Card.Title>
            <Card.Text> 
            <br></br>
            Globo, 2019. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={perrengue} id='imageCard'/>
          <Card.Body>
            <Card.Title style={{fontSize: 16}}>Perrengue</Card.Title>
            <Card.Text>
            <br></br>
            MTV, 2017.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className='mt-2'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={luciaMcCartney} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Lucia Mc Cartney</Card.Title>
              <Card.Text> 
              <br></br>
              GNT, 2017.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>    
        <Col className='mt-2'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={leiDoAmor} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>A Lei do Amor</Card.Title>
              <Card.Text> 
              <br></br>
              Globo, 2016.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    <Row>

        <Col className='mt-2'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={verdadesSecretas} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Verdades Secretas</Card.Title>
              <Card.Text> 
              <br></br>
              Globo, 2015.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-2'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={camaDeGato} id='imageCard'/>
            <Card.Body>
              <Card.Title style={{fontSize: 16}}>Cama de Gato</Card.Title>
              <Card.Text>
              <br></br>
                Globo, 2009.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>  
        <Col className='mt-2'>
        </Col>   
        <Col className='mt-2'>
        </Col> 
      </Row>

    </>
    
  )
}

export default Series