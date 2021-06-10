import { Link }from 'react-router-dom';
import styles from './Tahiti.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Tahiti = () =>  {

    return (
        <div className={styles.Tahiti} >
           <h1>Tahiti</h1>
           <p>Tahiti should be high on your list if you like your beaches paired with gourmet French cuisine. The largest of French Polynesian's islands is known for offering top-notch fare, verdant jungles, lavish resorts and sandy shores. The smaller section of Tahiti (known as Tahiti Iti) is more secluded than the larger Tahiti Nui, but both are worth seeing. Tahiti Iti's famous La Plage de Maui is highly regarded for a reason (think: sparkling sand and crystal-clear water), but the popularity comes with crowds. Check out Papenoo Beach on Tahiti Nui for excellent surfing conditions and more breathing room</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="sliderimg" 
                alt="pciture"  
                src="https://www.travelagewest.com/uploadedImages/All_Gateways/ASPAC/Australia_-_South_Pacific/TahitiOntheGroun_HERO.jpg?width=1008&height=567&scale=both&mode=crop" /> 
       <img className="sliderimg" 
                alt="pciture" 
                src="Tahiti should be high on your list if you like your beaches paired with gourmet French cuisine. The largest of French Polynesian's islands is known for offering top-notch fare, verdant jungles, lavish resorts and sandy shores. The smaller section of Tahiti (known as Tahiti Iti) is more secluded than the larger Tahiti Nui, but both are worth seeing. Tahiti Iti's famous La Plage de Maui is highly regarded for a reason (think: sparkling sand and crystal-clear water), but the popularity comes with crowds. Check out Papenoo Beach on Tahiti Nui for excellent surfing conditions and more breathing room"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://cdn.discover-the-world.com/app/uploads/2020/04/french-polynesia-bora-bora-nui-aerial-view-astk-800x600-c-default.jpg"
                />
                 <img className="sliderimg" 
                alt="pciture" 
                src="https://cdn.budgetyourtrip.com/images/photos/headerphotos/tahiti_boat.jpg"
                />
      </AliceCarousel>  
      </div>
    
)};

export default Tahiti;