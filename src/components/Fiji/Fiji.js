import { Link }from 'react-router-dom';
import styles from'./Fiji.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Fiji = () =>  {

    return (
        <div className={styles.Fiji} >
       
           <h1>Fiji</h1>
           <p>Boasting 333 islands, resplendent resorts, sparkling waters and endless stretches of pristine sand, Fiji is the perfect spot for paradise-seeking beachgoers. Travelers who want to snorkel while on vacation should set their sights on Taveuni's diverse coral reefs. Meanwhile, those pining for the tropical beaches featured in the movie "Cast Away" and multiple seasons of the TV show "Survivor" can catch a ferry from Port Denarau and head directly to one of the 20 islands that make up the Mamanuca Islands. Popular options include Qalito Island and Vomo Island.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg" 
                alt="pciture" 
                src="https://foundtheworld.com/wp-content/uploads/2014/12/Fiji.jpg" 
                />
            <img className="sliderimg" 
                alt="pciture"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fiji-ig-2-1593185771.jpg?crop=0.308xw:0.616xh;0.345xw,0.228xh&resize=640:*"
                />
            <img className="sliderimg" 
                alt="pciture"
                src="https://www.qantas.com/content/travelinsider/en/explore/south-pacific/fiji/things-to-know-before-you-go-to-fiji/_jcr_content/parsysTop/hero.img.full.medium.jpg/1543466853365.jpg"
                />     
                <img className="sliderimg" 
                alt="pciture"
                src="https://www.outrigger.com/-/media/images/outrigger/fiji/fci/bento/800x600/mattcbauer-aerial.jpg?h=600&la=en&w=800&hash=66226754AA26B45E6D1865957401624D2443F2C0"
                />
                </AliceCarousel>
           </div>

    
)};





export default Fiji;