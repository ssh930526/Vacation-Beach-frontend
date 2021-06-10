// import { Link }from 'react-router-dom';
import styles from './BookPage.module.css';

const BookPage = () =>  {

    return (
        <div className={styles.BookPage} >
           <h2>Book My Vacation</h2>
              
           
           
               <a  className="flight" href="https://www.expedia.com/">Expedia</a>
               
               <img className="icons" 
                // alt="picture" 
                    alt=""
                    src="https://lh3.googleusercontent.com/proxy/YamRaLG-5d4JBU3kWrBsj6UDzF8j5s-zJsWKJze4e0uAd1NX93iojjK9m3mrzkXsv9vXTO6h4QyldmuT38bucKNmV-uCbnYT4vmoahKVT0GF9KeUda2m4zIaQHo" 
                />
           
           
               <a className="flight" href="https://www.cheapflights.com/">Cheap Flight</a>
               
               <img className="icons" 
                // alt="picture" 
                    alt=""
                    src="https://img.utdstc.com/icon/a2d/015/a2d015db04214809819a5a858539069b3f2c7efb0c5a95d4c82e910ae503bc17:200"
                />
          
        </div>
    
)};


export default BookPage;