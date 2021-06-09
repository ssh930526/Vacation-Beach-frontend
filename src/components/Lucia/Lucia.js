import { Link }from 'react-router-dom';
import styles from'./Lucia.module.css';
const Lucia = () =>  {

    return (
        <div className={styles.Lucia} >
           <h1>Lucia</h1>
           <Link to='/beaches'> </Link>
           <img className="img8" 
                alt="pciture" 
                src="http://www.jaxfaxmagazine.com/wp-content/uploads/2020/09/Caibbean-saint-lucia-jade-mountain-resort.jpg" />
        </div>
    
)};

export default Lucia;