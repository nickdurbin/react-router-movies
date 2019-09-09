import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="buttonContainer">
      <div className="home-button"><NavLink to='/' activeClassName="activeNavButton">Home</NavLink></div>
      <div className="add-movie"><NavLink to='/addmovie' activeClassName="activeNavButton">Add Movie</NavLink></div>
    </div>
  </div>
);

export default SavedList;