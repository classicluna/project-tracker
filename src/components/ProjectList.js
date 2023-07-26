import React from 'react';
import './ProjectList.css';

const ProjectList = ({ projects, deleteProject }) => {
  return (
    <div className='project-list'>
      {projects.map((project) => (
        <div key={project.id} className='project-item'>
          <h3>{project.projectName}</h3>
          <p>Start Date: {project.projectStartDate}</p>
          <p>End Date: {project.projectEndDate}</p>
          <button
            onClick={() => deleteProject(project.id)}
            className='delete-button'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
