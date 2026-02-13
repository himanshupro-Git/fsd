import { useState } from "react";
export default function Counter(){
    // var count = 0;
    const [count, setCount] = useState(0);
    function handleIncreament(){
        // count++;
        // console.log(count);
        setCount(count=>count= count+1);
        
    }
    function handleDecreament(){
        setCount(count=>count= count-10);
        
        // count--;
        // console.log(count);
        
    }
    return(
        <div>
            <h1>Counter</h1>
            <h3>Count: {count}</h3>
            <button onClick={handleIncreament}>+</button>
            <button onClick={handleDecreament}>-</button>
        </div>
    )
}