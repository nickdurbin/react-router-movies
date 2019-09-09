import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddMovie() {
  const [newMovie, setNewMovie] = useState();

  const handleChange = event => {
    setNewMovie(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newMovie);
  }

  useEffect(() => {
    const postMovies = () => {
      axios
        .post(`http://localhost:5000/api/movies`, {
          id: '',
          title: "",
          director: "",
          metascore: '',
          stars: []
        })
        .then(response => {
          console.log(response, "Movie added.")
        })
        .catch(error => {
          console.log(error, "Your movie wasn't added.")
        })
    } 

    postMovies();
  }, []);

  return (
    <div className="movieForm">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Title:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <label>
          Director:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <label>
          Metascore:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <label>
          Stars:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
    </form>
    </div>
  )
}

export default AddMovie;
