import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const About = () => {
    const user="Doshna";
    const age=34;
  return (
    <div className="Link">
      <h1>About Page</h1>
      <Link to={`/dashboard/${user}/${age}`}>Dashboard</Link>
      <br></br>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default About;