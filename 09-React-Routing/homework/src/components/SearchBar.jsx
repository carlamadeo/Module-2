import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
      navigate("/");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        />
      <input type="submit" value="Agregar" />
    </form>
    
  );
}
