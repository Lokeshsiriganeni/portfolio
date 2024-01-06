

import React, { useState } from 'react';
import './App.css';
import Project from './components/Project'
import Header from './components/Header'
import AboutSection from './components/AboutSection';
import Contacts from './components/Contacts'
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
  <AboutSection />
    <div className="container">
      <h1>Add project</h1>
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

        <button type="submit" className = 'addBtn'>Add</button>
      </form>
      </div>
      <ul className="project-lists" id = 'projects'>
        <h1>Projects</h1>
        {projects.map((each)=>(
          <Project eachProject = {each} key = {each.index}/>
        ))}
        
      </ul>
      <Contacts />
      
   
    </>
 );
}

export default App;
