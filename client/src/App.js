import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import AddMovie from './Movies/AddMovie';
import FormikLoginForm from './Movies/LoginForm';

const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  const addToSavedList = movie => {
    const present = savedList.find(el => el.title === movie.title)
    if (!present) {
      setSavedList( [...savedList, movie] );
    } 
  };

  return (
    <div>
      <NavLink to='/savedList' activeClassName="activeNavButton"><SavedList list={savedList} /></NavLink>
      <Route path='/login' component={FormikLoginForm} />
      <Route path='/addMovie' render={props => <AddMovie {...props} movies={movies} />} />
      <Route exact path='/' render={props => <MovieList {...props} movies={movies} />}  />
      <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={addToSavedList} savedList={savedList} />} />
    </div>
  );
};

export default App;