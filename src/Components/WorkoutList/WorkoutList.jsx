import React from 'react';
import './WorkoutItem.css';
import { Button } from 'reactstrap'; 

 
function WorkoutItem(props) { 

    function deleteClicked() { 
        props.deleteWorkout( props.id ); 
    } 
 
    return ( 
        <li className="workout-item"> 
            { props.workout } ({props.quantity})  
            <Button color="primary" onClick={deleteClicked}>DONE</Button> 
        </li> 
    ); 
}  

export default function WorkoutList({ items, deleteWorkout }) { 
    const ItemsJsx = items.map(listItem =>  
        <WorkoutItem  
            key={listItem.id}  
            id={listItem.id} 
            workout={listItem.workout}  
            quantity={listItem.quantity} 
            deleteWorkout={deleteWorkout} />
    ); 

    return <ul className="workout-list-container">{ItemsJsx}</ul>; 
} 