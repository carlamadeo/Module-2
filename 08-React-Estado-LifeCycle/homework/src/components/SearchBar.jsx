import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  let [ city, setCity ] = useState('');

  return (

    <form className="form-inline" 
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}>

      <input className="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />

      <input className="btn btn-outline-success" 
        type="submit" value="Agregar" 
      />
        
    </form>
  );
}