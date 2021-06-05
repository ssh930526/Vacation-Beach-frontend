

import { Link } from 'react-router-dom';
import Whitsunday from '../Whitsunday/Whitsunday';
const Beach = (props) => {
    return (
        <div>
            <Whitsunday />
					<Link to='/beaches/whitsunday'>Whitsunday Islands</Link>
					
        </div>
    )
}
 export default Beach;