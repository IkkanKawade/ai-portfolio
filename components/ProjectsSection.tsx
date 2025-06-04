
import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
  onShowAllProjects: () => void; // プロップを追加
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, onShowAllProjects }) => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-brand-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-text mb-12">
          制作物
        </h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-brand-text-secondary">表示するプロジェクトはまだありません。後でもう一度確認してください！</p>
        )}
        <div className="text-center mt-12">
          <button
            onClick={onShowAllProjects}
            className="bg-brand-accent text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
            aria-label="全ての作品を見る"
          >
            全ての作品を見る →
          </button>
        </div>
      </div>
    </section>
  );
};
