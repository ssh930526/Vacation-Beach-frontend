import { Link }from 'react-router-dom';
import styles from './ViewPage.module.css';

const ViewPage = () =>  {

    return (
        <div className={styles.ViewPage}>
           <h3>View All Beaches</h3>
           <Link to='/beaches'> </Link>

           <h5>🍹 Fiji 🏝</h5>
           <img className="img" 
                alt="pciture" 
                src="https://foundtheworld.com/wp-content/uploads/2014/12/Fiji.jpg" />

           <h5>🍹 Bora Bora 🏝</h5>
          
           <img className="img"
                 alt="pciture" 
                 src="https://dbijapkm3o6fj.cloudfront.net/resources/1890,1004,1,6,4,0,960,540/-4153-/20201007143455/stay-3-nights-save-30-with-breakfast-dinner-le-bora-bora-by-pearl-resorts.jpeg"/>
           
            <h5>🍹 Maldives 🏝</h5>
            <img className="img"
                alt="pciture"  
                src="https://cdnprs.wisconsin.dev/wp-content/uploads/2021/05/mercuremaldiveskoodooresortmaldivesexterior.jpeg"/>
        
            <h5>🍹 Tahiti 🏝</h5>
            <img className="img" 
                alt="pciture"  
                src="https://www.travelagewest.com/uploadedImages/All_Gateways/ASPAC/Australia_-_South_Pacific/TahitiOntheGroun_HERO.jpg?width=1008&height=567&scale=both&mode=crop" /> 
            <h5>🍹 Maui 🏝</h5>
            <img className="img"
                alt="pciture"  
                src="https://static-ssl.businessinsider.com/image/571a57cf910584cc5e8be51b-1465-1099/01_maui_hawaii_01.jp2" /> 
            <h5>🍹 Whitsunday Island 🏝</h5>
            <img className="img" 
                alt="pciture"  
                src="https://www.planetware.com/photos-large/AUS/australia-queensland-whitsunday-islands-whitehaven-beach.jpg" />
            <h5>🍹 Mauritius 🏝</h5>
            <img className="img" 
                alt="pciture"  
                src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Places-To-Visit-In-Mauritius_27th-Feb.jpg" />
            <h5>🍹 St.Lucia 🏝</h5>
            <img className="img" 
                alt="pciture" 
                src="http://www.jaxfaxmagazine.com/wp-content/uploads/2020/09/Caibbean-saint-lucia-jade-mountain-resort.jpg" />
            <h5>🍹 Cancun 🏝</h5>
            <img className="img" 
                alt="pciture"  
                src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/331000/331437-Quintana-Roo.jpg" />
            <h5>🍹 Railay Beach 🏝</h5>
            <img className="img" 
                alt="pciture"  
                src="http://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/shared/teasersL/top10-railay/teaserMultiLarge/imageHilight/best-of-railay-LT.jpg" />
        </div>
      
    
)};

export default ViewPage;
