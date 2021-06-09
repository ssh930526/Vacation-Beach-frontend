import { Link }from 'react-router-dom';
import styles from './Railay.module.css';
const Railay = () =>  {

    return (
        <div className={styles.Railay}>
           <h1>Railay Beach</h1>
           <Link to='/beaches'> </Link>
           <img className="img10" 
                alt="pciture"  
                src="http://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/shared/teasersL/top10-railay/teaserMultiLarge/imageHilight/best-of-railay-LT.jpg" />
        </div>
    
)};

export default Railay;