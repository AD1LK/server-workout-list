import './App.css'; 
import React, {useState, useEffect} from 'react';

import WorkoutForm from './Components/WorkoutForm/WorkoutForm'; 
import WorkoutList from './Components/WorkoutList/WorkoutList'; 
 
function App() { 
  const [workoutList, setWorkoutList] = useState([]); 
 
  const loadData = () => {
    fetch('https://6gvgpx-8080.csb.app/api/list') 
      .then(x => x.json()) 
      .then(response => { 
        setWorkoutList(response); 
      }); 
  }; 

  const initialize = () => {
    loadData();
    setInterval(loadData, 45000);
  };

  useEffect(initialize, []); 

  const addWorkout = (workout, quantity) => { 
    fetch('https://6gvgpx-8080.csb.app/api/list/new', { 
      method: 'POST', 
      body: JSON.stringify({ 
        workout, 
        quantity 
      }), 
      headers: { 
        'Content-type': 'application/json; charset=UTF-8', 
      }, 
      mode: 'cors' 
    }) 
      .then(x => x.json()) 
      .then(loadData); 
  } 

  const deleteWorkout = (id) => { 
    fetch("https://6gvgpx-8080.csb.app/api/list/" + id, { 
        method: "DELETE", 
        headers: { 
            "Content-type": "application/json; charset=UTF-8", 
        }, 
        mode: "cors", 
    }) 
        .then((x) => x.json()) 
        .then(loadData); 
};  

  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <h1>Workout List</h1> 
      </header> 
      <main> 
        <WorkoutForm addWorkout={addWorkout}/> 
        <WorkoutList items={workoutList} deleteWorkout={deleteWorkout}/> 
      </main> 
    </div> 
  ); 
} 

export default App; 
