import React, {useState} from 'react'; 
import './WorkoutForm.css';
import { Button } from 'reactstrap';

export default function WorkoutForm(props) { 
    const [workout, setWorkout] = useState(''); 
    const [num, setNum] = useState(0); 

    const handleSubmit = (event) => { 
        event.preventDefault(); 
        props.addWorkout(workout, num); 
    }  

 
    function handleWorkoutChange(event) { 
        setWorkout(event.target.value); 

    } 

 
    function handleQuantityChange(event) { 
        setNum(event.target.value); 
    }     

 
    return ( 
        <form className="workout-form" action="#" method="POST" onSubmit={handleSubmit}> 
            <label className="input-label" htmlFor="workout">Workout</label> 
            <input  
                type="text"
                className="workout-input"  
                id="workout"  
                name="workout"  
                value={workout}  
                onChange={handleWorkoutChange}
                placeholder="Workout"
                maxLength={20}  
                required />
            <label className="input-label" htmlFor="quantity">Number of reps</label> 
            <input  
                type="number"
                className="workout-input"  
                id="quantity"  
                name="quantity"  
                value={num}  
                onChange={handleQuantityChange}
                min="0"
                max="1000"  
                required />
            <Button class="add-button btn btn-primary"  color="primary" type="submit">Add Workout</Button> 
        </form> 
    ); 
}