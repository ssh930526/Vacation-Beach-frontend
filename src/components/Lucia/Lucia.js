import { Link }from 'react-router-dom';
import styles from'./Lucia.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Lucia = () =>  {

    return (
        <div className={styles.Lucia} >
           <h1>Lucia</h1>
           <p>St. Lucia's beaches may be smaller than others on this list, but they're no less beautiful. Visitors won't find many lengthy stretches of sand here, but they'll have their pick of charming coves and private shorelines backed by lush mountains. Marigot Bay is a solid option for watching boats and yachts, while Reduit Beach attracts families keen on snorkeling or splashing in the gentle waves. Adventurous travelers who don't mind a hike should plan a visit to Grande Anse, a more secluded beach that's frequented by nesting leatherback sea turtles.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg" 
                alt="pciture" 
                src="http://www.jaxfaxmagazine.com/wp-content/uploads/2020/09/Caibbean-saint-lucia-jade-mountain-resort.jpg" />
       
            <img className="sliderimg" 
                alt="pciture" 
                src="https://media.triseptsolutions.com/sites/vaxwebuav/PublishingImages/UV_destinations/dest_UVF_thumb2.jpg"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://www.pleasantholidays.com/media/ffffffffff16dedf/destination/images/Caribbean/Saint_Lucia/car_st_lucia_main.jpg"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://stluciabestexperiencetour.com/wp-content/uploads/2017/01/Things-to-know-before-visiting-St-Lucia-960x540.jpg"
                />
        </AliceCarousel>
        </div>
    
)};

export default Lucia;