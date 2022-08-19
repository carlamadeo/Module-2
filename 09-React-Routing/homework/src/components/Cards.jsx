import React from 'react';
import './Cards.css';
import Card from './Card';


export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          min={c.min}
          max={c.max}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
          key={c.id}
        /> )}
    </div>
  );
}
