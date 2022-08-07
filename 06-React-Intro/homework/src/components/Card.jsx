import React from 'react';

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  
  const source = `http://openweathermap.org/img/wn/${img}@2x.png`
  
  return (
    <>
      <div>
        <button onClick={onClose}>X</button>
        <h3>{name}</h3>
        <p>Max</p>
        <p>{max}</p>
        <p>Min</p>
        <p>{min}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={name}/>
      </div>
    </>
  )
};