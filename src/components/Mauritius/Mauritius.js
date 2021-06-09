import { Link }from 'react-router-dom';
import styles from './Mauritius.module.css';
const Mauritius = () =>  {

    return (
        <div className={styles.Mauritius} >
           <h1>Mauritius</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Mauritius;