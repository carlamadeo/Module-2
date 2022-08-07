import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  
  return (
    <>
      <input type="text" placeholder='Ciudad...'/>
      <button onClick={() => onSearch('Buscando Ciudad...')}>Agregar</button>
    </>
  )
};