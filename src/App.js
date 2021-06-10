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
import BookPage from "./pages/BookPage/BookPage";
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
          
          beaches: [{ beach: " " }],
        newBeach: {
        beach: "",
        beachLocated:"",
        rating:"10",
        sandColor:""
      
    }, 
    
    editMode: false
         
        });
        
      } catch (error) {
        console.log(error)
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
          <div >
          <Link className="name" to='/beaches/fiji'> Fiji</Link>

          <Link className="name" to="/beaches/bora">Bora Bora</Link>
          
          <Link className="name" to="/beaches/maldives">Maldives</Link>
                   
          <Link className="name" to="/beaches/tahiti"> Tahiti </Link>
                   
          <Link className="name" to="/beaches/maui">Maui</Link>
          
          <Link className="name1" to="/beaches/whitsunday">Whitsunday Islands</Link>
                    
          <Link className="name1" to="/beaches/mauritius">Mauritius</Link>
          
          <Link className="name1" to="/beaches/lucia">St. Lucia</Link>
                   
          <Link className="name1" to="/beaches/cancun">Cancun</Link>
          
          <Link className="name1" to="/beaches/railay">Railay Beach</Link >
          
          <Link className="view" to="/beaches/view">View All Beach</Link >
 
          <Link className="add" to="/beaches/book"> Book My Beach</Link >

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
    <Route path='/beaches/maldives'
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
    <Route path='/beaches/book'
    render={()=> (
      <BookPage />
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
        <label className="labels">
          <span>BEACH</span>
          <input name="beachName" value={state.beaches.beach} onChange={handleChange}/>
        </label>
        <label className="labels">
          <span>Beach Located</span>
          <input name="beachLocated" value={state.beaches.beachLocated} onChange={handleChange}/>
        </label>
        <label className="labels">
          <span>Sand Color</span>
          <select name="sandColor" value={state.beaches.sandColor} onChange={handleChange}>
            <option value="Pink">Pink</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Normal">Normal</option>
            <option value="Red">Red</option>
            </select>
           
        </label>
        <label className="labels"> 
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
        <button className="labels">{ state.editMode ? 'EDIT BEACH' : 'ADD BEACH' }</button>
      </form>
  

    </section>

  
  
  <footer>
  <p>All Rights Reserved Copyright &copy; Beach 2021</p>
</footer>
  </>
  );
}