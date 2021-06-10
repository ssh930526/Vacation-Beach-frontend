import { Link } from 'react-router-dom';
import styles from'./Cancun.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
const Cancun = () =>  {

    return (
        <div className={styles.Cancun} >
           <h1>Cancun</h1>
           <p>Whether you're visiting Cancun, Mexico, for a family trip, spring break or a romantic getaway, you'll discover a selection of stunning beaches. While you could spend the bulk of your vacation lounging at a beachfront resort's stretch of sand, it's worth venturing off-site to other beaches in the area. Visitors say Playa Maroma is a must-see option thanks to its crystal-clear water and prime snorkeling conditions. Many also rave about Playa Delfines, which provides countless opportunities to catch a glimpse of frolicking dolphins. For a quiet escape from the Cancun crowds, head to the beaches on nearby Isla Mujeres. </p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg" 
                alt="pciture"  
                src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/331000/331437-Quintana-Roo.jpg" />
           <img className="sliderimg" 
                alt="pciture"
                src="https://cdn.getyourguide.com/img/location/5b45f52dbd137.jpeg/88.jpg" />
          <img className="sliderimg" 
                alt="pciture" 
                src="https://totalsurfcamp.com/sites/default/files/surfcamps/%5Btitle-raw%5D/playa-de-mahahual-mexico.jpg"
                />
         <img className="sliderimg" 
                alt="pciture" 
                src="https://i.pinimg.com/originals/63/82/c8/6382c81070ee499ad695e394c72d95d6.jpg"
                />
 </AliceCarousel>
 </div>
    
)};

export default Cancun;