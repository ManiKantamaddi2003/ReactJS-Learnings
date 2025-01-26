import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  const user1 = "Doshna";
  const age=25;

  return (
    <div className="Link">
      <h1>Home Page</h1>
      {/* Link to /dashboard/:name */}
      {/* <Link to={`/dashboard/${user1}/${age}`}>Dashboard</Link> */}
      <Link to={`/dashboard?name=${user1}&age=${age}`}>Dashboard</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
