import { Link }from 'react-router-dom';
import styles from './Maui.module.css';
const Maui = () =>  {

    return (
        <div className={styles.Maui} >
           <h1>Maui</h1>
           <Link to='/beaches'> </Link>
           <img className="img5"
                alt="pciture"  
                src="https://static-ssl.businessinsider.com/image/571a57cf910584cc5e8be51b-1465-1099/01_maui_hawaii_01.jp2" /> 
        </div>
    
)};

export default Maui;