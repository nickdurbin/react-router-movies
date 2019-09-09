import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddMovie() {
  const [newMovie, setNewMovie] = useState({
    id: '6',
    title: "",
    director: "",
    metascore: '',
    stars: []
  }); 

  const handleChange = event => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newMovie);
  }

  useEffect(() => {
    const postMovies = () => {
      axios
        .post(`http://localhost:5000/api/movies`)
        .then(response => {
          console.log(response.data, "Movie added.")
          setNewMovie(response.data);
        })
        .catch(error => {
          console.log(error, "Your movie wasn't added.")
        })
    } 

    postMovies();
  }, []);

  return (
    <div className="movieForm">
      <form name="id" onSubmit={event => handleSubmit(event)}>
        <label>
          Title:
          <input type="text" name="title" onChange={event => handleChange(event)} />
        </label>
        <label>
          Director:
          <input type="text" name="director" onChange={event => handleChange(event)} />
        </label>
        <label>
          Metascore:
          <input type="text" name="metascore" onChange={event => handleChange(event)} />
        </label>
        <label>
          Stars:
          <input type="text" name="stars" onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
    </form>
    </div>
  )
}

export default AddMovie;
