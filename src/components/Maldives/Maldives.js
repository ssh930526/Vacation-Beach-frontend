import { Link }from 'react-router-dom';
import styles from './Maldives.module.css';
const Maldives = () =>  {

    return (
        <div className={styles.Maldives} >
           <h1>Maldives</h1>
           <Link to='/beaches'> </Link>
           <img className="img3"
                alt="pciture"  
                src="https://cdnprs.wisconsin.dev/wp-content/uploads/2021/05/mercuremaldiveskoodooresortmaldivesexterior.jpeg"/>
        </div>
    
)};

export default Maldives;