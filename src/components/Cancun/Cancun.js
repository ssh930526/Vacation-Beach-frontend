import { Link } from 'react-router-dom';
import styles from'./Cancun.module.css';

const Cancun = () =>  {

    return (
        <div className={styles.Cancun} >
           <h1>Cancun</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Cancun;