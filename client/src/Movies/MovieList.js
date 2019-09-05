import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
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

  useEffect(() => {
    const postMovies = () => {
      axios
        .post(`http://localhost:5000/api/movies`, {
          id: 6,
          title: "Forrest Gump",
          director: "Robert Zemeckis",
          metascore: 86,
          stars: [
            "Tom Hanks",
            "Sally Field",
            "Robin Wright"
          ]
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
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}><MovieCard key={movie.id} movie={movie} /></Link>
      ))}
    </div>
  );
}

export default MovieList;