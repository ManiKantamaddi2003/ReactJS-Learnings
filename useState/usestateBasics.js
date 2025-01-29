import { useState } from "react";


const Index=()=>
{
    const [value,setCount]=useState(10);
    //console.log(arr);
    // console.log(value);
    // console.log(setCount);
    const incrementCount=()=>
    {
        setCount((pcount)=>
        {
            return pcount+1;
        });
        //decrement by 2 Using(ananimous Function)
        setCount((pcount)=>pcount+1
        )
        
    }
    const decrementCount=()=>
        {
            setCount(value-1);
        }
    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{value}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}
export default Index;