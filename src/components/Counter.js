const Counter = ({title, count, onButtonClick}) => {
    // returning jsx in here 

    // ({}) to declare the props in the signature above 
    // then has to be passed in to the jsx for it to do anything and actually show up in the react app
    
    // some logic will be defined in counter(component) - make sure its not too difficult like filtering etc
    // button logic 
    const handleAddParticipantClick = () => {
        onButtonClick(count + 1);
    }

    const handleRemoveParticipantClick = () => {
        if (count > 0) {
            onButtonClick(count - 1);
        }
    }

    return(
        <>
            <h3>{title} Sign-ups</h3>
            <p>Current Total: {count}</p>
            <button onClick={handleAddParticipantClick}>Add Participant</button>
            <button onClick={handleRemoveParticipantClick}>Remove Participant</button>
            <hr/>
        </>
    );
}

export default Counter;