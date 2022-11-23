import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
  return (
    <>
        <hr/>
        <Row>
            <Col>
            <h4>About us</h4>
            <h6>Our Company</h6>
            <br/>
            <h6>Our Coffee</h6>
            <br/>
            <h6>Stories and News</h6>
            <br/>
            <h6>Customer Service</h6>
            </Col>
            <Col>
            <h4>Careers</h4>
            <h6>Culture and Values</h6>
            <br/>
            <h6>Includsion, Diversity, and Equity</h6>
            <br/>
            <h6>Careers</h6>
            <br/>
            </Col>
            <Col>
            <h4>Social Impact</h4>
            <h6>People</h6>
            <br/>
            <h6>Planet</h6>
            <br/>
            </Col>
        </Row>
    </>

  );
}
