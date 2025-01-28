import React from "react";
import "./index.css";

const App = () => {

  // Event handler function that receives the event object and additional arguments
  function clickHandle(e, firstName) {
    console.log("Hii I am Clicked..!!", firstName, e); // Logs a message, the name, and the event object
  }

  return (
    <main className="container">
      {/* Button with an inline function to pass additional arguments to clickHandle */}
      <button
        className="button"
        // Normal Function
        //onClick={function (e) {
        //   return clickHandle(e, "Manikanta");
        // }}
        //Arrow Function
        onClick={(e)=> clickHandle(e,"Doshna")}
      >
        Click Me..!!
      </button>
    </main>
  );
};

export default App;


//output in console
/* 
Hii I am Clicked..!! Manikanta SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button.button, …}
Hii I am Clicked..!! Manikanta SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button.button, …}
Hii I am Clicked..!! Manikanta SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button.button, …}
*/