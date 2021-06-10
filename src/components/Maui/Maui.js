import { Link }from 'react-router-dom';
import styles from './Maui.module.css';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Maui = () =>  {

    return (
        <div className={styles.Maui} >
           <h1>Maui</h1>
           <p>If you're looking for a taste of Hawaii's beautiful beaches without the crowds on Oahu, retreat to Maui. The island boasts impressive beaches both big and small, adult- and family-friendly, as well as the black sand shores at Waianapanapa State Park. South Maui is especially popular with families, as it is home to Wailea Beach, which is known for its mostly calm water, bustling resorts and highly regarded restaurants. Meanwhile, the North Shore attracts active travelers keen on taking advantage of the superb windsurfing conditions at Ho'okipa Beach Park and Kanaha Beach Park.</p>
           <Link to='/beaches'> </Link>
           <AliceCarousel autoPlay autoPlayInterval="500">
           <img className="img5"
                alt="pciture"  
                src="https://static-ssl.businessinsider.com/image/571a57cf910584cc5e8be51b-1465-1099/01_maui_hawaii_01.jp2" /> 
     <img className="img8" 
                alt="pciture" 
                src="https://media.shermanstravel.com/Advice/thumb/large/952x460_hawaii_istock-jpg.jpg"
                />
                 <img className="img8" 
                alt="pciture" 
                src="https://www.lindsaysilberman.com/wp-content/uploads/2019/08/maui-itinerary.png"
                />
                 <img className="img8" 
                alt="pciture" 
                src="https://i.pinimg.com/originals/d0/a9/ca/d0a9ca02e5d73a45d11a383f98db7534.jpg"
                />
     </AliceCarousel> 
       </div>
    
)};

export default Maui;