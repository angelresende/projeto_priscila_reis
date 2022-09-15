import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Clips from './Clips'
import Series from './Series'
import WebSeries from './Webserie'
import Model from './Model'
import Theater from './Theater'
import Comerciais from './Comerciais'
import Films from './Films'


function TabWorks() {
  return (
    <Tabs
      defaultActiveKey="webseries"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="films" title="Filmes">
        <Films />
      </Tab>
      <Tab eventKey="series" title="Séries/Telenovelas">
        <Series />
      </Tab>
      <Tab eventKey="webseries" title="Web Séries">
        <WebSeries />
      </Tab>
      <Tab eventKey="theater" title="Teatro">
        <Theater />
      </Tab>
      <Tab eventKey="clips" title="Vídeo Clipes">
        <Clips />
      </Tab>
      <Tab eventKey="comerciais" title="Comerciais">
        <Comerciais />
      </Tab>
      <Tab eventKey="campanhas" title="Campanhas">
        <Model />
      </Tab>
    </Tabs>
  )
}

export default TabWorks