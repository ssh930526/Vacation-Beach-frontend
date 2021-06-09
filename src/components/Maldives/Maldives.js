import { Link }from 'react-router-dom';
import styles from './Maldives.module.css';
const Maldives = () =>  {

    return (
        <div className={styles.Maldives} >
           <h1>Maldives</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Maldives;