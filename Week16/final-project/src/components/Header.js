import React from 'react';
import Image from 'react-bootstrap/Image'
import CoffeeHeader from '../images/CoffeeHeader.jpg'

export default function Header() {
  return (
    <div>
      <Image src={CoffeeHeader} fluid />
    </div>
  );
}
