import { Link }from 'react-router-dom';
import styles from './Mauritius.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Mauritius = () =>  {

    return (
        <div className={styles.Mauritius} >
           <h1>Mauritius</h1>
           <p>This scenic African island, which sits east of Madagascar, offers a multitude of beaches to worth prioritizing. Visitors say the island's west coast is where you'll find the best strips of shoreline, including Flic en Flac and Le Morne, which feature beautiful white sand and superb vantage points for sunsets. Those who enjoy beaches near amenities will prefer north coast shores like Grand Baie, while those seeking a more remote beach experience will enjoy visiting east and south coast beaches like Île aux Cerfs and Blue Bay.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg" 
                alt="pciture"  
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Places-To-Visit-In-Mauritius_27th-Feb.jpg" />
  
  <img className="sliderimg" 
                alt="pciture" 
                src="https://www.odyssey-travels.com/site/park/northern-beaches-tailor-made-mauritius-beach-holidays=403001-310.jpg"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CAHB_sIAqrLhCl6nYJAEj_IXYD2EWimzeua-zhMp5lMiZUQSKYcTj6WkrAYnrGb5LS4&usqp=CAU"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://lp-cms-production.imgix.net/image_browser/Mauritius%20beach_1.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850"
                />
     </AliceCarousel>  
      </div>
    
)};

export default Mauritius;