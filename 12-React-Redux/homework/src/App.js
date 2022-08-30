import React from 'react';

import Favourites from './components/Favourites/Favourites';
import Buscador from './components/Buscador/Buscador';
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Movie from './components/Movie/Movie';

function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path='/' component={Buscador} />
          <Route path='/favs' component={Favourites} />
          <Route path='/movie/:id' component={Movie} />
      </React.Fragment>
  );
}

export default App;
