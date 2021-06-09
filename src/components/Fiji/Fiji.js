import { Link }from 'react-router-dom';
import styles from'./Fiji.module.css';
const Fiji = () =>  {

    return (
        <div className={styles.Fiji} >
       
           <h1>Fiji</h1>
           <Link to='/beaches'> </Link>
        </div>
    
)};

export default Fiji;