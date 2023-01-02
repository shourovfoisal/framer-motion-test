import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie/Movie';

function App() {
  
  const [popular, setPopular] = useState([]);
  
  useEffect(() => {
    fetchPopular();
  }, [])
  
  
  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7af204760b608671918b6c1e7342a142&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results);
  }
  
  return (
    <div className="App">
      <div className="popular-movies">
        {popular.map((movie, index) => <Movie key={index} title={movie.title.slice(0,30)} url={movie.backdrop_path} />)}
      </div>
    </div>
  );
}

export default App;
