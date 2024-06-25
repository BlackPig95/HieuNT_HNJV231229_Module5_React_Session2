import { useState } from "react";

function Timer()
{
    const [ time, setTime ] = useState(60);
    const [ intervalId, setIntervaLId ] = useState();
    return (
        <div>
            <p>Timer: { time }</p>
            <button onClick={ () =>
            {   //Prevent multiple click
                if (intervalId != null)
                    return;
                setIntervaLId(setInterval(() =>
                {
                    setTime(prev => prev - 1);
                }, 1000));
            } }>Start</button>
            <button onClick={ () =>
            {
                clearInterval(intervalId);
                //Allow continue after clicking pause
                setIntervaLId(null);
            }
            }>Pause</button>
            <button onClick={ () =>
            {
                setTime(60);
                clearInterval(intervalId);
                //Allow start again after clear
                setIntervaLId(null);
            }
            }>Clear</button>
        </div>
    );
}

export default Timer;