import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import TabWorks from './components/TabWorks'



function MyWorks() {
  return (
    <>
    <section className='main-container'>
      <Header />      
    </section>
    <Container>
      <Row>  
        <TabWorks />
      </Row>
    </Container>
    </>
  )
}

export default MyWorks