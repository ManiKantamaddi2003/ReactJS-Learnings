import React from "react";
import "./index.css";
import data from './data';

const App = () => {
  
  return (
    <main className="container">
      <ul className="comments-container">
      {
        data.map((eachComponent)=>
        {
          const{id,name,email,body}=eachComponent;
          return(<ListItem key={id} id={id} name={name} email={email} body={body}/>);
        })
      }
      </ul>
    </main>
  );
};

const ListItem=(props)=>
{
  
  const{id,name,body,email}=props;
  return <li  className="comment">
  <h3 className="email">{id}</h3>
  <div className="comments-container">
  <h3 className="email">{email}</h3>
  <h3 className="name">{name}</h3>
  </div>
  <div className="message">{body}</div>
  </li>
}



export default App;
