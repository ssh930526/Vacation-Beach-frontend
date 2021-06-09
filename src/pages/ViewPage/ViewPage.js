import { Link }from 'react-router-dom';

const ViewPage = () =>  {

    return (
        <div>
           <h4>View All Beaches</h4>
           <Link to='/beaches'> </Link>
           <img className="img11" 
                alt="pciture"  
                src="https://www.planetware.com/photos-large/AUS/australia-queensland-whitsunday-islands-whitehaven-beach.jpg" />
        </div>
    
)};

export default ViewPage;
