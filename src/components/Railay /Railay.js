import { Link }from 'react-router-dom';
import styles from './Railay.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
const Railay = () =>  {

    return (
        <div className={styles.Railay}>
           <h1>Railay Beach</h1>
           <p>Railay Beach (also known as Rai Leh) abuts the Andaman Sea from its location in Thailand's Krabi province. The region is composed of four main beaches and is home to pillowy sand, crystal-clear water, staggering yet climbable cliffs (for the experienced climber) and lush jungles. For a truly spectacular beach experience, head to Phra Nang Beach, where you'll find caves, islands and coral reefs to explore. Another must-visit Railay Beach shoreline is beautiful Railay West, which sits within walking distance of a variety of shops, restaurants, bars and resorts.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg" 
                alt="pciture"  
                src="http://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/shared/teasersL/top10-railay/teaserMultiLarge/imageHilight/best-of-railay-LT.jpg" />
        <img className="sliderimg" 
                alt="pciture" 
                src="http://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/homepage/seedo/railey/pagePropertiesImage/railay-peninsula.jpg.jpg"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://res.cloudinary.com/thetripguru/image/upload/02-tours/pjtnm5b9qxhtesfhol0g"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://res.cloudinary.com/thetripguru/image/upload/02-tours/pjtnm5b9qxhtesfhol0g"
                />
       </AliceCarousel> 
       </div>
    
)};

export default Railay;