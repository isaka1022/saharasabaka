import React from 'react';
import Project from '../components/Project';

const ProjectPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">プロジェクト概要</h1>
      <Project showPreparationInfo={true} />
    </div>
  );
};

export default ProjectPage; 
