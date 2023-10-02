import React, {useState} from 'react'; 
 
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
        <form action="#" method="POST" onSubmit={handleSubmit}> 
            <label htmlFor="workout"></label> 
            <input  
                type="text"  
                id="workout"  
                name="workout"  
                value={workout}  
                onChange={handleWorkoutChange}  
                required /> 
            <label htmlFor="quantity"></label> 
            <input  
                type="number"  
                id="quantity"  
                name="quantity"  
                value={num}  
                onChange={handleQuantityChange}  
                required /> 
            <button type="submit">Add</button> 
        </form> 
    ); 
} 