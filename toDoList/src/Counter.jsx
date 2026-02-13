import { useState } from "react";

export default function Counter(){
    // var count = 0;
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);
    function handleAgeIncreament(){
        setAge(age=>age + 1);
    } 
    function handleAgeDecreament(){
        setAge(age=>age - 1);
        
    } 
    function handleIncreament(){
        // count++;
        // console.log(count);
        setCount(count=>count= count+1);
        
    }
    function handleDecreament(){
        setCount(count=>count= count-1);
        
        // count--;
        // console.log(count);
        
    }
    return(
        <div>
            <h1 className="firstheading">Counter</h1>
            <h3>Count: {count}</h3>
            <button onClick={handleIncreament}>Count+</button>
            <button onClick={handleDecreament}>Count-</button>
            <br/>
            <h1 className="secondheading">Age Counter</h1>
            <h3>AgeCount: {age}</h3>
            <button onClick={handleAgeIncreament}>Age+</button>
            <button onClick={handleAgeDecreament}>Age-</button>
        </div>
    )
}