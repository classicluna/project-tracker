import React from 'react';
import './ProjectTimeline.css';

const ProjectTimeline = ({ project }) => {
  const { milestones, projectStartDate, projectEndDate } = project;

  // Calculate the total project duration in days
  const startDate = new Date(projectStartDate);
  const endDate = new Date(projectEndDate);
  const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  // Calculate the progress in percentage
  const currentStartDate = new Date(projectStartDate);
  const today = new Date();
  const elapsedDays = Math.floor(
    (today - currentStartDate) / (1000 * 60 * 60 * 24)
  );
  const progress = Math.min(Math.floor((elapsedDays / totalDays) * 100), 100);

  return (
    <div className='project-timeline'>
      <h2>{project.projectName} Timeline</h2>
      <div className='timeline'>
        {milestones.map((milestone) => (
          <div key={milestone.name} className='milestone'>
            <div className='milestone-label'>{milestone.name}</div>
            <div className='milestone-date'>{milestone.targetDate}</div>
          </div>
        ))}
      </div>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
