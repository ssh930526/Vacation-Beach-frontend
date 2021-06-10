import { Link }from 'react-router-dom';
import styles from './Whitsunday.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
const Whitsunday = () =>  {

    return (
        <div className={styles.Whitsunday}>
            
           <h1>Whitsunday</h1>
           <p>Located off the northeastern coast of Australia, the Whitsunday Islands feel like an entirely different world. The archipelago sits adjacent to the Great Barrier Reef and offers an incredibly unique, albeit fragile, ecosystem. Some of the best beaches on this collection of 74 islands include Betty's Beach, Whitehaven Beach and Chalkies Beach, but there are plenty of stunning spots to choose from. When you're not sunbathing on pearl-white sand or snorkeling through turquoise water, unwind at one of the bungalows or luxury ecoresorts situated on Hamilton Island or Long Island.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg" 
                alt="pciture"  
                src="https://www.planetware.com/photos-large/AUS/australia-queensland-whitsunday-islands-whitehaven-beach.jpg" />
       
       <img className="sliderimg" 
                alt="pciture" 
                src="https://lp-cms-production.imgix.net/features/2015/03/Whitehaven-aerial-view_cs.jpg"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://www.planetware.com/wpimages/2019/07/australia-queensland-whitsunday-islands-top-attractions-sailing-trips-cruises.jpg"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://www.planetware.com/wpimages/2019/07/australia-queensland-whitsunday-islands-top-attractions-sailing-trips-cruises.jpg"
                />
                </AliceCarousel> 
       </div>
    
)};

export default Whitsunday;