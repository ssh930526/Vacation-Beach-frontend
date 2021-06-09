import { Link }from 'react-router-dom';
import styles from './Tahiti.module.css';
const Tahiti = () =>  {

    return (
        <div className={styles.Tahiti} >
           <h1>Tahiti</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Tahiti;