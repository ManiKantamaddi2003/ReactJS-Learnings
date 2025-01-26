import React from 'react';
// import { Link, useParams } from 'react-router-dom';
import './index.css';
import { Link, useSearchParams } from 'react-router-dom';

const Dashboard = () => {
  //const { name,age } = useParams(); // Retrieve 'name' from the URL
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name'); // Retrieve 'name' query parameter
  const age = searchParams.get('age'); // Retrieve 'age' query parameter
  return (
    <div className="Link">
      <h1>Dashboard Page</h1>
      <h3>Hi, {name}! Your Age {age}</h3>
      <Link to="/about">About</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Dashboard;
