import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ListMovie({ search }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response;
        if (search) {
          response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=d64465f835d027114fd469afd4e2de72&query=${search}`
          );
        } else {
          response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=d64465f835d027114fd469afd4e2de72"
          );
        }
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [search]);

  return (
    <div className="container">
      {movies.map((movie) => (
        <div className="card" key={movie.id}>
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <div>
            <h5>{movie.title}</h5>
            <p>{movie.overview.slice(0, 120)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
}

ListMovie.propTypes = {
  search: PropTypes.string,
};

export default ListMovie;
