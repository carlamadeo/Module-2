import React from 'react';
import styles from '../styles/Card.module.css';


export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  
  const source = `http://openweathermap.org/img/wn/${img}@2x.png`
  
  return (
      <div className={styles.card}>
        <button className={styles.btn} onClick={onClose} >X</button>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.content}>
          <div className={styles.temp}>
            <h3>Max</h3>
            <p>{max}</p>
          </div>
          <div className={styles.temp}>
            <h3>Min</h3>
            <p>{min}</p> 
          </div>  
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={name}/>
        </div>
      </div>
  )
};