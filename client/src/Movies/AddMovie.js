import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

function AddMovie(props) {

  const [movie, setMovie] = useState({
    id: 6,
    title: '',
    director: '',
    metascore: '',
    stars: [],
  })

  const handleMovie = (event) => {
    const { name, value } = event.target;
    setMovie({
      ...movie,
      [name]: value
    })
  }

  const postMovies = (event) => {
    event.preventDefault();
    axios
    .post(`http://localhost:5000/api/movies`, movie)
    .then(response => {
      response.setMovie({ id: movie.id + 1, title: '', director: '', metascore: '', stars: [] })
    })
    .catch(error => {
      console.log(error, "Your movie wasn't added.")
    })
  } 

  return (
    <div className="form-container">
      <h2 className="form-heading">Add Your Favorite movie</h2>
      <form className="form" onSubmit={(e) => postMovies(e)}>
        <input
          type="text"
          value={movie.title}
          name="title"
          placeholder="Title"
          onChange={(event) => handleMovie(event)}
          className="form-input"
        />
        <input
          type="text"
          value={movie.director}
          name="director"
          placeholder="Director"
          onChange={(event) => handleMovie(event)}
          className="form-input"
        />
        <input
          type="text"
          value={movie.metascore}
          name="metascore"
          placeholder="Metascore"
          onChange={(event) => handleMovie(event)}
          className="form-input"
        />
        <textarea
          type="text"
          value={movie.stars}
          name="stars"
          placeholder="Stars"
          onChange={(event) => handleMovie(event)}
          className="form-input"
        />
        <button className="form-submit">Submit</button>
      </form>
    </div>
  )
}

export default AddMovie;