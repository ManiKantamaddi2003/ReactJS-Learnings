import React, { useState } from "react";

const Index=()=>
{
    const[data,setdata]=useState(false);

    const ontoggle=()=>
    {
        setdata(!data)
    };
    
    return<div>
    <h1>Click to See Magic </h1>
    <button onClick={ontoggle}>{data?"Hide":"Show"}</button>
    {
        data?<h2>Hii How Are you...</h2>:<h2></h2>
    }


    </div>
}

export default Index;