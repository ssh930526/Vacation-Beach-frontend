import { Link }from 'react-router-dom';
import styles from'./Fiji.module.css';
const Fiji = () =>  {

    return (
        <div className={styles.Fiji} >
       
           <h1>Fiji</h1>
           <Link to='/beaches'> </Link>
           <img className="img1" 
                alt="pciture" 
                src="https://foundtheworld.com/wp-content/uploads/2014/12/Fiji.jpg" />
        </div>
    
)};

export default Fiji;