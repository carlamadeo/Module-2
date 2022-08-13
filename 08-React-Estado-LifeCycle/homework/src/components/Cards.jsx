import React from 'react';
import Card from './Card';
import './Cards.css';

export default function Cards({cities, onClose}) {

  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            min={c.min}
            max={c.max}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            key={c.id}
            /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
