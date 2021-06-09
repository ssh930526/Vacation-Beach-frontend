import styles from'./Bora.module.css';
import { Link } from 'react-router-dom';


const Bora = () =>  {

    return (
        <div className={styles.Bora} >
           <h1>Bora</h1>
           <Link to='/beaches'> </Link>
           <img  className="img2"  
                 alt="pciture" 
                 src="https://dbijapkm3o6fj.cloudfront.net/resources/1890,1004,1,6,4,0,960,540/-4153-/20201007143455/stay-3-nights-save-30-with-breakfast-dinner-le-bora-bora-by-pearl-resorts.jpeg"/>
        </div>
    
)};

export default Bora;