import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddMovie() {
  const [newMovie, setNewMovie] = useState();

  const onChange = event => {
    setNewMovie(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(newMovie);
  }

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
    <div>
      
    </div>
  )
}

export default AddMovie;
