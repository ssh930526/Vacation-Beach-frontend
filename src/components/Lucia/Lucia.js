import { Link }from 'react-router-dom';
import styles from'./Lucia.module.css';
const Lucia = () =>  {

    return (
        <div className={styles.Lucia} >
           <h1>Lucia</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Lucia;