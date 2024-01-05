

import React, { useState } from 'react';
import './App.css';
import Project from './components/Project'
import Header from './components/Header'
import Home from './components/HomeSection'
import HomeSection from './components/HomeSection';

function App() {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [imageUrl, setImageUrl] = useState('');
 const [projectUrl, setProjectUrl] = useState('');
 const [projects, setProjects] = useState([{
  title:'Food Much',
  imageUrl:'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png',
  description:'this website used to list out the items and details of restaurant',
  projectUrl:'https://lokesh3.ccbp.tech'
 },{title:'jobby App',
 imageUrl:'https://assets.ccbp.in/frontend/react-js/logo-img.png',
 description:'this website used to find the jobs',
 projectUrl:'https://lokeshjobbyweb0.ccbp.tech'}
]);

 const handleSubmit = (event) => {
    event.preventDefault();

    const newProject = { 
      title,
      description,
      imageUrl,
      projectUrl,
    };

    setProjects([...projects, newProject]);
    setTitle('');
    setDescription('');
    setImageUrl('');
    setProjectUrl('');
 };

 return (
  <>
  <Header/>
  <HomeSection/>
    <div className="container">
      <h1>Build Your Protofolio</h1>
      <form onSubmit={handleSubmit} className='formContainer'>
        <label>Project Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label>Project Description:</label>
        <textarea rows="5" cols="50"
          value={description}
          onChange={(event) => setDescription(event.target.value)}

        />

        <label>Image URL:</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />

        <label>Project URL:</label>
        <input
          type="url"
          value={projectUrl}
          onChange={(event) => setProjectUrl(event.target.value)}
          required
        />

        <button type="submit" className = 'addBtn'>Add Project</button>
      </form>
      <ul className="project-lists">
        <h1>Projects</h1>
        {projects.map((each)=>(
          <Project eachProject = {each} key = {each.index}/>
        ))}x
        
      </ul>
    </div>
    </>
 );
}

export default App;
