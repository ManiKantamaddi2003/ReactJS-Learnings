import React from "react";
import "./index.css";
import data from './data';

const App=()=>
{
  // Arrow Function Based
  // const clickHandle=(e)=>
  // {
  //   alert("Submited"+e);
  // }

  //function Based
  function clickHandle(e)
  {
    console.log("Hii I am Clicked..!!");
  }
  return(<main className="container">
    <button className="button" onClick={clickHandle}>
                Click Me..!!
    </button>
    </main>
  );
};

export default App;
