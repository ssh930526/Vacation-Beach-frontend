import styles from'./Bora.module.css';
import { Link } from 'react-router-dom';


const Bora = () =>  {

    return (
        <div className={styles.Bora} >
           <h1>Bora</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Bora;