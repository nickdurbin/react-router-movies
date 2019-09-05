import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <NavLink to='/savedList' activeClassName="activeNavButton"><SavedList list={savedList} /></NavLink>
      <Route exact path='/' component={MovieList}/>
      <Route path='/movies/:id' render={props => <Movie savedList={savedList} />} />
    </div>
  );
};

export default App;