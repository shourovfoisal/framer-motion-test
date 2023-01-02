
import { useEffect } from 'react';
import './Filter.css'

const Filter = (props) => {
  
  const { popular, setFiltered, activeGenre, setActiveGenre } = props;
  
  useEffect(() => {
    if(activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    
    const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);
    
  }, [activeGenre]);
  
  return (
    <div className="filter-container">
      <button className={ activeGenre === 0 ? 'active' : null } onClick={() => setActiveGenre(0)}>All</button>
      <button className={ activeGenre === 35 ? 'active' : null }  onClick={() => setActiveGenre(35)}>Comedy</button>
      <button className={ activeGenre === 28 ? 'active' : null }  onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  )
}

export default Filter