


import { Link } from 'react-router-dom';

const BeachPage = (props) => {
    return (
        <div className='App'>
            <ViewPage ViewPage={props.viewPage} />
            <Link 
            className='btn btn-default' to='/beaches/view'>View</Link>
           
        </div>
    )
}
export default BeachPage;

