import React from 'react';
import CarouselHome from './CarouselHome';
import AccordionHome from './AccordionHome'

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Totoro Cafe's Employee Website!</h1>
      <br />
        <CarouselHome />
        <AccordionHome />
    </div>
  );
}
