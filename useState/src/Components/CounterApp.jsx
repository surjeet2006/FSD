import { useState } from "react";

export default function CounterApp() {
    const [count, setCount] = useState(0);
    function inc(){
        if(count==10){
            alert("This is maximum count");
            return;
        }
        return setCount(count+1);
    }
    function dec(){
        if(count==0){
            alert("This is minimum count")
            return;
        }
        return setCount(count-1);
    }
    return (
        <div style={{border: "2px solid red", height: "300px", width: "300px"}}>
        <h1>CounterApp</h1>
        <button onClick={inc}>ADD +</button>
        <br />
        <span>{count}</span>
        <br />
        <button onClick={dec}>SUB -</button>
        </div>
    )
}
