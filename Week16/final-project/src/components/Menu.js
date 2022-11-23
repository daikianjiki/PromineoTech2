import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

import Image from 'react-bootstrap/Image'
import Americano2 from '../images/Americano2.webp'
import ChaiTea from '../images/ChaiTea.webp'
import IcedCoffee from '../images/IcedCoffee.webp'
import IcedTea from '../images/IcedTea.webp'
import HotBreakfast from '../images/HotBreakfast.webp'
import Bakery from '../images/Bakery.webp'

export default function Menu() {
  return (
    <>
        <h1>Menu</h1>
        <h2>Drinks</h2>
        <hr />
        <Container>
            <Row>
                <Col>
                    <Stack direction="horizontal">
                        <Image id="menu" src={Americano2} roundedCircle />
                        <h3>Hot Coffee</h3>
                    </Stack>
                </Col>
                <Col>
                    <Stack direction="horizontal">
                        <Image id="menu" src={ChaiTea} roundedCircle />
                        <h3>Hot Tea</h3>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Stack direction="horizontal">
                        <Image id="menu" src={IcedCoffee} roundedCircle />
                        <h3>Cold Coffee</h3>
                    </Stack>
                </Col>
                <Col>
                    <Stack direction="horizontal">
                        <Image id="menu" src={IcedTea} roundedCircle />
                        <h3>Iced Tea</h3>
                    </Stack>
                </Col>
            </Row>
        </Container>
        <br/>
        <h2>Food</h2>
        <hr />
        <Container>
            <Row>
                <Col>
                    <Stack direction="horizontal">
                        <Image id="menu" src={HotBreakfast} roundedCircle />
                        <h3>Hot Breakfast</h3>
                    </Stack>
                </Col>
                <Col>
                    <Stack direction="horizontal">
                        <Image id="menu" src={Bakery} roundedCircle />
                        <h3>Bakery</h3>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </>
  );
}
