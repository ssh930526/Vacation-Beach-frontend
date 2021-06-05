import styles from './Whitsunday.module.css';
import { Link } from 'react-router-dom';

const Whitsunday = props => {
    return(
   <div className={styles.Whitsunday}>
      <Link to='/'>All Beaches</Link>
      <h1>Whitsunday Beach</h1>
    </div>
);
    }

    export default Whitsunday;