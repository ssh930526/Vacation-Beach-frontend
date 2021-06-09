import { Link }from 'react-router-dom';
import styles from './Tahiti.module.css';
const Tahiti = () =>  {

    return (
        <div className={styles.Tahiti} >
           <h1>Tahiti</h1>
           <Link to='/beaches'> </Link>
           <img className="img4" 
                alt="pciture"  
                src="https://www.travelagewest.com/uploadedImages/All_Gateways/ASPAC/Australia_-_South_Pacific/TahitiOntheGroun_HERO.jpg?width=1008&height=567&scale=both&mode=crop" /> 
        </div>
    
)};

export default Tahiti;