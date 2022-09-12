import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Clips from './Clips'
import Series from './Series'
import WebSeries from './Webserie'
import Model from './Model'


function TabWorks() {
  return (
    <Tabs
      defaultActiveKey="webseries"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="series" title="Séries">
        <Series />
      </Tab>
      <Tab eventKey="webseries" title="Web Séries">
        <WebSeries />
      </Tab>
      <Tab eventKey="clips" title="Vídeo Clipes">
        <Clips />
      </Tab>
      <Tab eventKey="model" title="Modelo">
        <Model />
      </Tab>
    </Tabs>
  )
}

export default TabWorks