import { useState, useEffect } from "react";
import { auth } from './services/firebase';
import { 
  fetchBeaches, 
  updateBeach, 
  createBeach, 
  deleteBeach } from "./services/beach-service";
  
import Header from './components/Header';
  
import "./App.css";

export default function App() {
  const [state, setState] = useState({
    beaches: [{ beach: "name" }],
    beachLocated: {
      beach: "",
      rating:"5"
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
    // Set up authentication observer
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));

    // clean up function
    return function() {
      // clean up subscriptions
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
            Beach: '', 
            rating:'5'
            
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
            rating:"5"
  
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
          
          <div 
            className="controls"
            onClick={() => handleEdit(s._id)}
          >{'✏️'}</div>
          <div 
            className="controls"
            onClick={() => handleDelete(s._id)}
          >{'🗑'}</div>
        </article>
      ))}
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          <span>BEACH</span>
          <input name="beach" value={state.newBeach.beach} onChange={handleChange}/>
        </label>
        <label> 
          <span>Rating</span>
          <select name="rating" value={state.newBeach.rating} onChange={handleChange}>
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
    </>
  );
}

