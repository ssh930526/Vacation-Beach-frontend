import styles from'./Bora.module.css';
import { Link } from 'react-router-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Bora = () =>  {

    return (
        <div className={styles.Bora} >
           <h1>Bora</h1>
           <p>This French Polynesian island is small but mighty. Measuring only 6 miles long and less than 3 miles wide, every inch of Bora Bora is packed with stunning beaches, green jungles and ritzy resorts featuring overwater bungalows. Matira Beach is ideal for sunbathing and strolling along sandy shores, while the beach at the Four Seasons Resort Bora Bora is where you should head for Mount Otemanu views and calm water. Snorkeling and shark-feeding excursions are also available if you enjoy adventurous pursuits.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img  className="slideimg"  
                 alt="pciture" 
                 src="https://dbijapkm3o6fj.cloudfront.net/resources/1890,1004,1,6,4,0,960,540/-4153-/20201007143455/stay-3-nights-save-30-with-breakfast-dinner-le-bora-bora-by-pearl-resorts.jpeg"/>
        
        <img  className="slideimg"  
        alt="pciture"
        src="https://www.libertytravel.com/sites/default/files/styles/full_size/public/Bora%20Bora-a.jpg?itok=fyZt_6qe" />
        <img  className="slideimg"  
        alt="pciture"
        src="https://content.r9cdn.net/rimg/dimg/8b/e5/e0dd60a9-freereg-2000160-16644d965bc.jpg?width=1750&height=1000&xhint=1534&yhint=897&crop=true" />
        <img  className="slideimg"  
        alt="pciture"
        src="https://gotahiti.com/wp-content/uploads/2018/05/640x380_conrad-bora-bora-nui-04.jpg" />
    </AliceCarousel>
    </div>
)};

export default Bora;