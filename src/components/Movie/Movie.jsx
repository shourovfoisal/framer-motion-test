
import { motion } from "framer-motion";

const Movie = ({title, url}) => {

    const api = 'https://image.tmdb.org/t/p/w500/';
    
  return (
    <motion.div layout="true">
        <h2 layout>{title}</h2>
        <img layout src={api + url} alt="" />
    </motion.div>
  )
}

export default Movie