import React from 'react'; 

 
function WorkoutItem(props) { 

    function deleteClicked() { 
        props.deleteWorkout( props.id ); 
    } 
 
    return ( 
        <li> 
            { props.workout } ({props.quantity})  
            <button onClick={deleteClicked}>DELETE</button> 
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

    return <ul>{ItemsJsx}</ul>; 
} 