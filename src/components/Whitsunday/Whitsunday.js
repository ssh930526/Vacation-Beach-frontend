import { Link }from 'react-router-dom';
import styles from './Whitsunday.module.css';
const Whitsunday = () =>  {

    return (
        <div className={styles.Whitsunday}>
           <h1>Whitsunday</h1>
           <Link to='/beaches'> </Link>
           <img className="img6" 
                alt="pciture"  
                src="https://www.planetware.com/photos-large/AUS/australia-queensland-whitsunday-islands-whitehaven-beach.jpg" />
        </div>
    
)};

export default Whitsunday;