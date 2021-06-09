import { Link }from 'react-router-dom';
import styles from './Maui.module.css';
const Maui = () =>  {

    return (
        <div className={styles.Maui} >
           <h1>Maui</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Maui;