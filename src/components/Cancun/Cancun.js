import { Link } from 'react-router-dom';
import styles from'./Cancun.module.css';

const Cancun = () =>  {

    return (
        <div className={styles.Cancun} >
           <h1>Cancun</h1>
           <Link to='/beaches'> </Link>
           <img className="img9" 
                alt="pciture"  
                src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/331000/331437-Quintana-Roo.jpg" />
        </div>
    
)};

export default Cancun;