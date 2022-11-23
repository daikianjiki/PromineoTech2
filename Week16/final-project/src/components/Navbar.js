import React from 'react';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Home from './Home'
import Menu from './Menu'
import Create from './Create';
import Read from './Read';
import Update from './Update';

import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Navbar() {
  return (
      <Row className="container">
        <Col sm={3} id="navbar">
          <Link to="/">
            <Button className="fluid ui olive button mb-4">Home</Button>
          </Link>
          <Link to="/menu">
            <Button className="fluid ui olive button mb-4">Menu</Button>
          </Link>
          <Link to="/employee">
            <Button className="fluid ui olive button mb-4">Employee</Button>
          </Link> 
        </Col>
        <Col sm={9}>
          <Routes>
            <Route exact path ='/' element = {<Home />} />
            <Route exact path ='/menu' element = {<Menu/>} />
            <Route path ='/employee' element = {<Create />} />
            <Route path ='/read' element = {<Read />} />
            <Route path ='/update' element = {<Update />} />
          </Routes>
        </Col>
      </Row>
  );
}
