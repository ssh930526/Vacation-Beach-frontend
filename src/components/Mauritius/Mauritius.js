import { Link }from 'react-router-dom';
import styles from './Mauritius.module.css';
const Mauritius = () =>  {

    return (
        <div className={styles.Mauritius} >
           <h1>Mauritius</h1>
           <Link to='/beaches'> </Link>
           <img className="img7" 
                alt="pciture"  
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Places-To-Visit-In-Mauritius_27th-Feb.jpg" />
  
        </div>
    
)};

export default Mauritius;