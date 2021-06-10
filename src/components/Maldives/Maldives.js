import { Link }from 'react-router-dom';
import styles from './Maldives.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Maldives = () =>  {

    return (
        <div className={styles.Maldives} >
           <h1>Maldives</h1>
           <p>The Maldives is unlike any beach destination you'll experience. This tropical paradise features 22 ring-shaped atolls made up of approximately 1,200 islands where each beach is more beautiful than the last. You'll likely stick to the island where your resort is, but you can expect pearlescent sands, towering palm trees, incredibly blue waters and surreal sunsets at all of the beaches in the Maldives. Most public beaches require covering up, so if you do stray from your resort's sands, consider checking out the bikini-friendly beaches on Rasdhoo and Maafushi.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg"
                alt="pciture"  
                src="https://cdnprs.wisconsin.dev/wp-content/uploads/2021/05/mercuremaldiveskoodooresortmaldivesexterior.jpeg"/>
       <img className="sliderimg" 
                alt="pciture" 
                src="https://cache.marriott.com/marriottassets/marriott/MLEWH/mlewh-wow-oceanhaven-1800-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://images.trvl-media.com/hotels/3000000/2400000/2398200/2398185/dc18855f.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://smartflyer.com/wp-content/uploads/2018/10/22328317-6013-4F9D-BAEA-689BB2B237B1-1620x795.jpg"
                />
       </AliceCarousel> 
       </div>
    
)};

export default Maldives;