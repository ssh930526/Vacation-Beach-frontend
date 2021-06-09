import { Link }from 'react-router-dom';
import styles from './Whitsunday.module.css';
const Whitsunday = () =>  {

    return (
        <div className={styles.Whitsunday}>
           <h1>Whitsunday</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Whitsunday;