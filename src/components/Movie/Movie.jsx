
const Movie = ({title, url}) => {

    const api = 'https://image.tmdb.org/t/p/w500/';
    
  return (
    <div>
        <h2>{title}</h2>
        <img src={api + url} alt="" />
    </div>
  )
}

export default Movie