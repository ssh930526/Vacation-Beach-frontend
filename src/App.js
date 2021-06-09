import { useState, useEffect } from "react";
import { auth } from './services/firebase';
import { 
  fetchBeaches, 
  updateBeach, 
  createBeach, 
  deleteBeach } from "./services/beach-service";
  
import Header from './components/Header';

import { Route, Switch, Link} from 'react-router-dom';
import "./App.css";
import ViewPage from "./pages/ViewPage/ViewPage";
import BeachPage from "./pages/BeachPage/BeachPage";
import AddPage from "./pages/AddPage/AddPage";
import Bora from './components/Bora/Bora';
import Cancun from './components/Cancun/Cancun';
import Fiji from './components/Fiji/Fiji';
import Lucia from './components/Lucia/Lucia';
import Maldives from './components/Maldives/Maldives';
import Maui from './components/Maui/Maui';
import Mauritius from './components/Mauritius/Mauritius';
import Railay from './components/Railay /Railay';
import Tahiti from './components/Tahiti/Tahiti';
import Whitsunday from './components/Whitsunday/Whitsunday';


export default function App() {

  const [state, setState] = useState({
    beaches: [{ beach: " " }],
    newBeach: {
      beach: "",
      beachLocated:"",
      rating:"10",
      sandColor:""
      
    }, 
    editMode: false
  });

  const [ userState, setUserState ] = useState({
    user: null
  });

  useEffect(function() {
    async function getAppData() {

      const beaches = await fetchBeaches();
      
      setState(prevState => ({
        ...prevState,
        beaches
      }));

     
    }
    getAppData();
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));

    // clean up function
    return function() {
      unsubscribe();
    }
  }, []);



  async function handleSubmit(e) {
    e.preventDefault();

    if(state.editMode) {
      try {
        const beaches = await updateBeach(state.newBeach);
        setState({
          beaches,
          editMode: false,
          newBeach: {
            beach: "",
            beachLocated:"",
            rating:"10",
            sandColor:""
            
          }
        });
        
      } catch (error) {
        
      }

    } else {
      
      try {
        const beach = await createBeach(state.newBeach);
    
        setState({
          beaches: [...state.beaches, beach],
          newBeach: {
            beach: "",
            beachLocated:"",
            rating:"10",
            sandColor:""
  
          }
        });
        
      } catch (error) {
        
        console.log(error);
      }

    }
  }

  function handleChange(e) {
    setState(prevState => ({
        ...prevState,
        newBeach: {
          ...prevState.newBeach,
          [e.target.name]: e.target.value
        }
    }));
  }


  function handleEdit(id) {
    const beachToEdit = state.beaches.find(beach => beach._id === id);
    setState(prevState => ({
      ...prevState,
      newBeach: beachToEdit,
      editMode: true
    }));
  }

  async function handleDelete(id) {
    try {
      const beaches = await deleteBeach(id);
      setState(prevState => ({
        ...prevState,
        beaches
      }));
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
    <Header user={userState.user} />

    <section>
      {state.beaches.map((s, i) => (
        <article key={i}>
          <div>{s.beach}</div> 
          <div>
          <Link to='/beaches/fiji'> Fiji</Link>
  <img className="img1" alt="pciture" src="https://foundtheworld.com/wp-content/uploads/2014/12/Fiji.jpg" />

   <a className="name"  href="/beaches/bora">Bora Bora</a>
  <img  className="img2"  alt="pciture" src="https://dbijapkm3o6fj.cloudfront.net/resources/1890,1004,1,6,4,0,960,540/-4153-/20201007143455/stay-3-nights-save-30-with-breakfast-dinner-le-bora-bora-by-pearl-resorts.jpeg"/>
  
  <a className="name" href="/beaches/maldives">Maldives</a>
  <img className="img3" alt="pciture"  src="https://cdnprs.wisconsin.dev/wp-content/uploads/2021/05/mercuremaldiveskoodooresortmaldivesexterior.jpeg"/>
  
    <a className="name" href="/beaches/tahiti"> Tahiti </a>
  <img className="img4" alt="pciture"  src="https://www.travelagewest.com/uploadedImages/All_Gateways/ASPAC/Australia_-_South_Pacific/TahitiOntheGroun_HERO.jpg?width=1008&height=567&scale=both&mode=crop" /> 
  
  <a className="name" href="/beaches/maui">Maui</a>
  <img className="img5" alt="pciture"  src="https://static-ssl.businessinsider.com/image/571a57cf910584cc5e8be51b-1465-1099/01_maui_hawaii_01.jp2" /> 
  
  <a className="name" href="/beaches/whitsunday">Whitsunday Islands</a>
  <img className="img6" alt="pciture"  src="https://www.planetware.com/photos-large/AUS/australia-queensland-whitsunday-islands-whitehaven-beach.jpg" />
  
  <a className="name" href="/beaches/mauritius">Mauritius</a>
  <img className="img7" alt="pciture"  src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Places-To-Visit-In-Mauritius_27th-Feb.jpg" />
  
  <a className="name" href="/beaches/lucia">St. Lucia</a>
  <img className="img8" alt="pciture"  src="http://www.jaxfaxmagazine.com/wp-content/uploads/2020/09/Caibbean-saint-lucia-jade-mountain-resort.jpg" />
  
  <a className="name" href="/beaches/cancun">Cancun</a>
  <img className="img9" alt="pciture"  src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/331000/331437-Quintana-Roo.jpg" />

  
  <a className="name" href="beaches/railay">Railay Beach</a>
  <img className="img10" alt="pciture"  src="http://static.asiawebdirect.com/m/phuket/portals/krabi-hotels-com/shared/teasersL/top10-railay/teaserMultiLarge/imageHilight/best-of-railay-LT.jpg" />
 
  <Switch>
    <Route exact path='/'
    render={()=> (
      <BeachPage />
    )} />
    <Route path='/beaches/fiji'
    render={() => (
      <Fiji />
    )} />
    <Route path='/beaches/bora' 
    render={() => (
      <Bora />
    )}
    />
    <Route  path='/beaches/cancun'
    render={() => (
      <Cancun />
    )}
    />
    <Route path='/beaches/lucia'
    render={() => (
      <Lucia />
    )}
    />
    <Route path='/beaches/maldive'
    render={()=> (
      <Maldives />
    )}
      />
    <Route path='/beaches/maui'
    render={() => (
      <Maui />
    )}
    />
    <Route path='/beaches/mauritius'
    render={() => (
      <Mauritius />
    )} />
    <Route path='/beaches/railay'
    render={()=> (
      <Railay />
    )}
    />
    <Route path='/beaches/tahiti'
    render={() => (
      <Tahiti />
    )}
    />
    <Route path='/beaches/whitsunday'
    render={() =>(
      <Whitsunday />
    )}
    />
    <Route path='/beaches/add'
    render={()=> (
      <AddPage />
    )}
    />
    <Route path='/beaches/view'
    render={() => (
      <ViewPage />
    )}
     />
     

  </Switch>
 
  </div>
  

      
          <div 
            className="controls"
            onClick={() => handleEdit(s._id)}
          >{'✏︎'}</div>
          <div 
            className="controls"
            onClick={() => handleDelete(s._id)}
          >{'✘'}</div>
        </article>
      ))}
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          <span>BEACH</span>
          <input name="beachName" value={state.beaches.beach} onChange={handleChange}/>
        </label>
        <label>
          <span>Beach Located</span>
          <input name="beachLocated" value={state.beaches.beachLocated} onChange={handleChange}/>
        </label>
        <label>
          <span>Sand Color</span>
          <select name="sandColor" value={state.beaches.sandColor} onChange={handleChange}>
            <option value="Pink">Pink</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Normal">Normal</option>
            <option value="Red">Red</option>
            </select>
           
        </label>
        <label> 
          <span>Rating</span>
          <select name="rating" value={state.beaches.rating} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
 
          </select>
        </label>
        <button>{state.editMode ? 'EDIT BEACH' : 'ADD BEACH'}</button>
      </form>
  

    </section>

  
  
  <footer>
  <p>All Rights Reserved Copyright &copy; Beach 2021</p>
</footer>
  </>
  );
}


