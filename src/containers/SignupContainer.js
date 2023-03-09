import { useState } from "react";
import Counter from "../components/Counter";

const SignupContainer = () => {
    // have to make one call for every value we want to have in our application's state
    const [archeryCount, setArcheryCount] = useState(0);
    const [zorbCount, setZorbCount] = useState(0);
    const [canoeCount, setCanoeCount] = useState(0);

    return(
        <>
            <h2>Activities</h2>
            <Counter title={"Archery"} count={archeryCount}
            onButtonClick={setArcheryCount}/>
            <Counter title={"Zorbing"} count={zorbCount}
            onButtonClick={setZorbCount}/>
            <Counter title={"Canoeing"} count={canoeCount}
            onButtonClick={setCanoeCount}/>
            <p>Total Sign-ups: {archeryCount + zorbCount + canoeCount}</p>
        </>
    )
    // the title and count passed in are our props (properties)
    // properties can be single values, complex data or functions etc
    // these need to be declared in the component files' signature otherwise it won't do anything even if imported
    // can do this through ({}) and declaring them in there
}

export default SignupContainer;