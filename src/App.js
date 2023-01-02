import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Movie from './components/Movie/Movie';

function App() {
  
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  useEffect(() => {
    fetchPopular();
  }, [])
  
  
  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7af204760b608671918b6c1e7342a142&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  }
  
  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}  />
      <div className="popular-movies">
        {filtered.map((movie, index) => <Movie key={index} title={movie.title.slice(0,30)} url={movie.backdrop_path} />)}
      </div>
    </div>
  );
}

export default App;
