import React, { useState } from 'react';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectTimeline from './components/ProjectTimeline';
import './App.css';

const App = () => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <div className='app'>
      <h1>Project Progress Tracker</h1>
      <ProjectForm addProject={addProject} />
      <ProjectList projects={projects} deleteProject={deleteProject} />
      {projects.map((project) => (
        <ProjectTimeline key={project.id} project={project} />
      ))}
    </div>
  );
};

export default App;
