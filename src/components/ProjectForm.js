import React, { useState } from 'react';
import './ProjectForm.css';

const ProjectForm = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [projectStartDate, setProjectStartDate] = useState('');
  const [projectEndDate, setProjectEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName || !projectStartDate || !projectEndDate) return;

    const newProject = {
      id: Date.now(),
      projectName,
      projectStartDate,
      projectEndDate,
      milestones: [],
    };
    addProject(newProject);
    setProjectName('');
    setProjectStartDate('');
    setProjectEndDate('');
  };

  return (
    <form onSubmit={handleSubmit} className='project-form'>
      <input
        type='text'
        placeholder='Project Name'
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Start Date (mm/dd/yyyy)'
        value={projectStartDate}
        onChange={(e) => setProjectStartDate(e.target.value)}
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
      />
      <input
        type='text'
        placeholder='End Date (mm/dd/yyyy)'
        value={projectEndDate}
        onChange={(e) => setProjectEndDate(e.target.value)}
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
      />
      <button type='submit'>Add Project</button>
    </form>
  );
};

export default ProjectForm;
