import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';

export default function App() {

  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        
        if(recurso.main !== undefined){          
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if(cities.find(el => JSON.stringify(el) === JSON.stringify(ciudad)))
            alert('Ciudad ya agregada');
          else
            setCities(cities => [...cities, ciudad]);        

        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  return (
    <div className="App">
      <div>
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
  );
}
